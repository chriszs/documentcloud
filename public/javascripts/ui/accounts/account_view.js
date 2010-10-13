// A tile view for previewing a Document in a listing.
dc.ui.AccountView = Backbone.View.extend({

  AVATAR_SIZES : {
    badge         : 30,
    row           : 25,
    admin         : 25,
    collaborator  : 25
  },

  TAGS : {
    badge         : 'div',
    row           : 'tr',
    admin         : 'tr',
    collaborator  : 'tr'
  },

  events : {
    'click .edit_account':    'showEdit',
    'click .change_password': 'promptPasswordChange',
    'click .resend_welcome':  'resendWelcomeEmail',
    'click .admin_link':      '_openAccounts',
    'click .save_changes':    '_doneEditing',
    'click .delete_account':  '_deleteAccount'
  },

  constructor : function(options) {
    this.modes      = {};
    this.kind       = options.kind;
    this.tagName    = this.TAGS[this.kind];
    this.className  = 'account_view ' + this.kind;
    Backbone.View.call(this, options);
    this.template   = JST['account/' + this.kind];
    _.bindAll(this, '_onSuccess', '_onError');
    this._boundRender = _.bind(this.render, this, 'display');
    this.observe(this.model);
  },

  observe : function(model) {
    if (this.model) this.model.unbind('change', this._boundRender);
    this.model = model;
    this.model.bind('change', this._boundRender);
  },

  render : function(viewMode, options) {
    if (this.modes.view == 'edit') return;
    viewMode = viewMode || 'display';
    options  = options || {};
    var attrs = _.extend({account : this.model, email : this.model.get('email'), size : this.size(), current : Accounts.current()}, options);
    if (this.isRow()) this.setMode(viewMode, 'view');
    $(this.el).html(this.template(attrs));
    if (this.model.isPending()) $(this.el).addClass('pending');
    this._loadAvatar();
    this.handleEvents();
    return this;
  },

  size : function() {
    return this.AVATAR_SIZES[this.kind];
  },

  isRow : function() {
    return this.kind == 'row' || this.kind == 'admin';
  },

  serialize : function() {
    var attrs = this.$('input, select').serializeJSON();
    if (attrs.role) attrs.role = parseInt(attrs.role, 10);
    return attrs;
  },

  showEdit : function() {
    this.$('option.role_' + this.model.get('role')).attr({selected : 'selected'});
    this.setMode('edit', 'view');
  },

  promptPasswordChange : function() {
    dc.app.accounts.close();
    var dialog = dc.ui.Dialog.prompt('Enter your new password:', '', _.bind(function(password) {
      this.model.save({password : password}, {success : _.bind(function() {
        dc.ui.notifier.show({
          text      : 'Password updated',
          duration  : 5000,
          mode      : 'info'
        });
      }, this)});
      return true;
    }, this), {password : true, mode : 'short_prompt'});
  },

  resendWelcomeEmail : function() {
    dc.ui.spinner.show();
    var model = this.model;
    model.resendWelcomeEmail({success : function() {
      dc.ui.spinner.hide();
      dc.app.accounts.close();
      dc.ui.Dialog.alert('A welcome message has been sent to ' + model.get('email') + '.');
    }});
  },

  _loadAvatar : function() {
    var img = new Image();
    var src = this.model.gravatarUrl(this.size());
    img.onload = _.bind(function() { this.$('img.avatar').attr({src : src}); }, this);
    img.src = src;
  },

  _openAccounts : function(e) {
    e.preventDefault();
    dc.app.accounts.open();
  },

  // When we're done editing an account, it's either a create or update.
  // This method specializes to try and avoid server requests when nothing has
  // changed.
  _doneEditing : function() {
    var me = this;
    var attributes = this.serialize();
    var options = {success : this._onSuccess, error : this._onError};
    if (this.model.isNew()) {
      if (!attributes.email) return $(this.el).remove();
      dc.ui.spinner.show();
      this.model.newRecord = true;
      this.model.set(attributes);
      Accounts.create(this.model, options);
    } else if (!this.model.invalid && !this.model.changedAttributes(attributes)) {
      this.setMode('display', 'view');
    } else {
      dc.ui.spinner.show();
      this.model.save(attributes, options);
    }
  },

  _deleteAccount : function() {
    if (dc.app.accounts.isOpen()) dc.app.accounts.close();
    dc.ui.Dialog.confirm('Really delete ' + this.model.fullName() + '?', _.bind(function() {
      $(this.el).remove();
      this.model.destroy();
      return true;
    }, this));
  },

  _onSuccess : function(model, resp) {
    this.model.invalid = false;
    this.setMode('display', 'view');
    this.model.change();
    dc.ui.spinner.hide();
    if (this.model.newRecord) {
      this.model.newRecord = false;
      dc.ui.notifier.show({
        text      : 'Signup sent to ' + model.get('email'),
        duration  : 5000,
        mode      : 'info'
      });
    }
  },

  _onError : function(model, resp) {
    model.invalid = true;
    dc.ui.spinner.hide();
    this.showEdit();
    dc.ui.notifier.show({
      text : resp.errors[0]
    });
  }

});