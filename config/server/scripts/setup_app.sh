#!/bin/bash

# approve github ssh host key
grep -q github .ssh/known_hosts 2>/dev/null || ssh-keyscan -t rsa github.com > .ssh/known_hosts

USERNAME=ubuntu
RAILS_ENVIRONMENT=production

chown -R $USERNAME .
test -e documentcloud || sudo -u $USERNAME git clone git@github.com:documentcloud/documentcloud.git documentcloud
cd /home/$USERNAME/documentcloud

