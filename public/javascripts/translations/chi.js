window.I18n.load({
  namespace: 'WS',
  code: 'chi',
  nplurals: 2,
  pluralizer: function(n){
    return (n > 1);
  },
  strings: {"explain_disable_account":"%1$s \u5c07\u4e0d\u6703\u80fd\u5920\u767b\u9304\u5230DocumentCloud. %1$s \u63d0\u4f9b\u7684\u516c\u5171\u6587\u4ef6\u548c\u8a3b\u91cb\u53ef\u4fdd\u6301\u53ef\u7528\u3002%2$s \u806f\u7d61\u6211\u5011 %3$s \u5fb9\u5e95\u6e05\u9664%1$s's\u7684\u5e33\u6236\u3002","set_will_appear":"\u6703\u51fa\u73fe\u5728\u9019\u6a94\u6848\u4e2d\n","edit_source":"\u66f4\u6539\u51fa\u8655","redaction_close_while_processing":["\u4f60\u7de8\u8f2f\u4e86\u4e00\u6bb5\u843d\u3002\u9019\u4efd\u6587\u4ef6\u65bc\u91cd\u5efa\u6642\u5c07\u95dc\u9589\u3002\u4f60\u78ba\u5b9a\u4f60\u6e96\u5099\u597d\u7e7c\u7e8c\u55ce\uff1f","\u4f60\u7de8\u8f2f\u4e86%d\u6bb5\u843d\u3002\u9019\u4efd\u6587\u4ef6\u65bc\u91cd\u5efa\u6642\u5c07\u95dc\u9589\u3002\u4f60\u78ba\u5b9a\u4f60\u6e96\u5099\u597d\u7e7c\u7e8c\u55ce\uff1f"],"no_project_doc_selected":"\u6c92\u6709\u9078\u64c7\u9805\u76ee\u6216\u6587\u4ef6","close_while_redacting":"\u9019\u4efd\u6587\u4ef6\u6b63\u5728\u7de8\u8f2f\uff0c\u65bc\u91cd\u5efa\u6642\u5c07\u95dc\u9589\u3002","uploaded_x_document_has":["\u4e0a\u8f09\u6587\u4ef6\u6709"," %d \u4e0a\u8f09\u6587\u4ef6\u6709"],"related_article_url":"\u76f8\u95dc\u6587\u7ae0\u7684\u7db2\u5740","document_publish_public_help":"\u9019\u500b\u6587\u4ef6\u662f\u516c\u958b\u7684\u3002\u5b83\u662f\u76ee\u524d\u53ef\u4f9b\\\u7528\u6236\u65bcDocumentCloud\u76ee\u9304\u641c\u7d22\uff0c\u4f60\u628a\u5b83\u5d4c\u5165\u60a8\u7684\u7db2\u7ad9\u4e0a\u5f8c\u5b83\u5c07\u6703\u4f9b\u516c\u773e\u700f\u89bd\u53ef\u898b\u3002\u66f4\u6539\uff05s\u8a2a\u554f\u7d1a\u5225\uff05s\u3002","remove_pages":"\u522a\u9664\u9801\u9762","private_to_organization_help":"\u53ea\u6709\u662f\u540c\u4e00\u6a5f\u69cb\u7684\u4eba\u54e1\u624d\u80fd\u89c0\u770b\u6587\u4ef6\u3002","source":"\u4f86\u6e90","ok":"\u5b8c\u6210","no_duplicate_section":"\u4e0d\u80fd\u5efa\u7acb\u4e00\u500b\u91cd\u8907\u7684\u7ae0\u7bc0\u3002","embed_viewer_opens_to":"\u67e5\u770b\u5668\u6253\u958b","analyze_project_in_overview":"\u65bc\u6982\u8ff0\u6a21\u5f0f\u5206\u6790\u9019\u9805\u76ee","change_page_arrows":"\u4f7f\u7528\u53f3\u5074\u7684\u7bad\u982d\u4f86\u66f4\u6539\u9801\u9762\u3002","document":"\u6587\u4ef6","download_pdf":"\u4e0b\u8f09\u6700\u521dPDF","embed_document":"\u5d4c\u5165\u9019\u6587\u4ef6","remove_page_warning_message":["\u4f60\u9078\u64c7\u522a\u9664\u9801\u9762\u3002\u9019\u4efd\u6587\u4ef6\u65bc\u91cd\u5efa\u6642\u5c07\u95dc\u9589\u3002\u4f60\u78ba\u5b9a\u4f60\u6e96\u5099\u597d\u7e7c\u7e8c\u55ce\uff1f","\u4f60\u9078\u64c7\u522a\u9664%d\u9801\u9762\u3002\u9019\u4efd\u6587\u4ef6\u65bc\u91cd\u5efa\u6642\u5c07\u95dc\u9589\u3002\u4f60\u78ba\u5b9a\u4f60\u6e96\u5099\u597d\u7e7c\u7e8c\u55ce\uff1f"],"projects":"\u9805\u76ee","print_notes_missing_error":"\uff05s\u4e0d\u5305\u542b\u4efb\u4f55\u53ef\u6253\u5370\u6587\u4ef6\u3002","modification":"\u4fee\u6539","add_html_for_note":"\u6dfb\u52a0\u6b64HTML\u5230\u60a8\u7684\u7db2\u7ad9\u4f86\u5d4c\u5165\u8a3b\u91cb\u3002","edit_data":"\u4fee\u6539\u8cc7\u6599","show_more":"\u986f\u793a\u66f4\u591a","language":"\u8a9e\u8a00","edit_published_url":"\u66f4\u6539\u5df2\u767c\u4f48\u7684\u7db2\u5740","upload_pages":"\u4e0a\u8f09\u9801\u9762","mentioning_query":"\u63d0\u5230\u0026ldquo;%s\u0026rdquo;","not_found_search":"\u60a8\u7684\u641c\u7d22\u6c92\u6709\u5339\u914d\u7684\u6587\u4ef6\u3002","height":"\u9ad8\u5ea6","upload_document":"\u4e0a\u8f09\u6587\u4ef6","access_level_edit_closing":"\u66f4\u65b0\u6587\u4ef6\u8a2a\u554f\u7d1a\u5225\u9700\u4e00\u5b9a\u6642\u5019\u3002\u6587\u4ef6\u5b8c\u6210\u8655\u7406\u5f8c\u5c07\u81ea\u52d5\u95dc\u9589\u3002","save_as_draft":"\u5132\u5b58\u70ba\u8349\u7a3f","reenable":"\u91cd\u65b0\u555f\u7528","analyze_x_docs_in_overview":["\u65bc\u6982\u8ff0\u6a21\u5f0f\u5206\u6790\u9019\u6587\u4ef6","\u65bc\u6982\u8ff0\u6a21\u5f0f\u5206\u6790\u9019\u4e9b\u6587\u4ef6"],"by_date":"\u4f9d\u65e5\u671f","mentioned_in_x_documents":["\n\u5728\u6587\u6a94\u4e2d\u63d0\u5230\u7684","\u5728%d \u6587\u6a94\u4e2d\u63d0\u5230\u7684"],"embed_note":"\u52a0\u5165\u7b46\u8a18","collaboration":"\u5408\u4f5c","insert_first_page":"\u65bc\u7b2c\u4e00\u9801\u524d\u52a0\u5165","delete_documents":["\u522a\u9664\u6587\u4ef6"],"project_exists":"\u540d\u70ba%s\u7684\u9805\u76ee\u5df1\u5b58\u5728\u3002","add_html_for_documents":"\u5c07\u6b64HTML\u52a0\u5230\u60a8\u7684\u7db2\u7ad9\u4f86\u5d4c\u5165\u9019\u4e9b\u6587\u4ef6\u3002\n\n","email_for_assistance":"\u5982\u679c\u60a8\u9700\u8981\u5e6b\u52a9\uff0c\u8acb\u96fb\u90f5\u81f3support@documentcloud.org\u3002","private_access_help":"\u53ea\u6709\u8a31\u53ef\u8005\uff08\u901a\u904e\u5408\u4f5c\uff09\u624d\u80fd\u89c0\u770b\u6587\u4ef6\u3002","send":"\u767c\u9001","matching_search":"\u8207\u9019\u641c\u7d22\u76f8\u95dc","add_public_note":"\u52a0\u5165\u4e00\u500b\u516c\u958b\u7b46\u8a18","source_of_document":"\u6587\u4ef6\u7684\u4f86\u6e90\u5f9e","please_enter_valid_email":"\u8acb\u8f38\u5165\u6b63\u78ba\u96fb\u5b50\u90f5\u4ef6\u5730\u5740\u3002","organizations_documents":"\u6b64\u6587\u4ef6\u5c6c\u65bc%s","reviewer_email_instructions":["\u96fb\u5b50\u90f5\u4ef6\u50b3\u9001\u8aaa\u660e\u7d66%2$s","\u96fb\u5b50\u90f5\u4ef6\u50b3\u9001\u8aaa\u660e\u7d66%d \u8a55\u5be9\u54e1"],"relevance":"\u76f8\u95dc","view_pages":"\u67e5\u770b\u9801","max_upload_size_warn":"\u60a8\u53ea\u80fd\u4e0a\u50b3\u5c0f\u65bc200MB\u7684\u6587\u4ef6\u3002\u8acb\u7684\uff05s \u58d3\u7e2e\uff05s\u6587\u6a94\uff0c\u7136\u5f8c\u518d\u7e7c\u7e8c\u3002","future_documents_w_appear":"\u672a\u4f86\u7684\u6587\u4ef6\uff05s\u5c07\u51fa\u73fe\u5728\u4f60\u7684\u5d4c\u5165\u3002","optional":"\u81ea\u9078\u7684","title_of_document":"\u6587\u4ef6\u6a19\u984c","add_reviewer":"\u52a0\u5165\u8a55\u5be9\u54e1","default_document_language":"\u8a2d\u5b9a\u6587\u6a94\u8a9e\u8a00","remove_entity":"\u5f9e\u641c\u7d22\u4e2d\u522a\u9664\u9019\u500b\u5be6\u9ad4","reorder_pages_instructions":"\u62d6\u653e\u9801\u9762\u6539\u8b8a\u6392\u5e8f","document_tools":"\u6587\u4ef6\u5de5\u5177","edit_document_information":"\u66f4\u591a\u6587\u4ef6\u8cc7\u6599","resend_instructions":"\u91cd\u65b0\u767c\u9001\u6307\u4ee4","not_found_all":"\u9019\u88e1\u6c92\u6709\u6587\u4ef6\u3002","message":"\u4fe1\u606f","private":"\u79c1\u4eba","update_applied_all":"\u4e0a\u8f09\u6240\u6709\u6587\u4ef6","no_reviewer_on_document":["\u9019\u4efd\u6587\u4ef6\u6c92\u6709\u8a55\u5be9\u54e1\u3002","\u9019\u4e9b\u6587\u4ef6\u6c92\u6709\u8a55\u5be9\u54e1\u3002"],"sending":"\u50b3\u9001\u4e2d...","not_found_annotated":"\u9019\u88e1\u6c92\u6709\u8a3b\u91cb\u6587\u4ef6\u3002","not_found_project":"\u672c\u9805\u76ee\u4e0d\u5305\u542b\u4efb\u4f55\u6587\u4ef6\u3002","bad_data_key":"\uff05s\u4e0d\u80fd\u88ab\u7528\u4f5c\u4e3b\u9375","date_uploaded":"\u4e0a\u50b3\u65e5\u671f","view_entities":"\u67e5\u770b\u5be6\u9ad4","width":"\u5bec\u5ea6","manage_account":"\u7ba1\u7406\u5e33\u865f","open":"\u6253\u958b","reviewer_add_permission_denied":"\u4f60\u4e0d\u5141\u8a31\u6dfb\u52a0\u8a55\u5be9\u54e1\u3002","set_publication_date":"\u8a2d\u7f6e\u51fa\u7248\u65e5\u671f","no_projects_help":"\u6b64\u5e33\u6236\u6c92\u6709\u4efb\u4f55\u9805\u76ee\u3002\u8981\u555f\u52d5\uff0c\u9ede\u64ca\u201c\u65b0\u5efa\u9805\u76ee\u201d\u6309\u9215\u3002","adding_accounts":"\u65b0\u589e\u5e33\u6236","must_have_title":"\u8acb\u8f38\u5165\u6a19\u984c\u3002","by_relevance":"\u4f9d\u76f8\u95dc\u6027","signup_sent_to":"\u8a3b\u518a\u767c\u9001\u5230\uff05s\u3002","no_permission_to_edit_x":"\u4f60\u6c92\u6709\u6b0a\u529b\u4fee\u6539\u6587\u4ef6\u3002","new_project":"\u65b0\u9805\u76ee","embed_search_step_two":"\u6b65\u9a5f\u4e8c\uff1a\u8907\u88fd\u548c\u8cbc\u4e0a\u5d4c\u5165\u4ee3\u78bc","page_ellipsis":"\u9801...","document_modification":"\u6587\u4ef6\u4fee\u6539","uploaded_x_documents":["\u4e0a\u8f09\u4e00\u500b\u6587\u4ef6","\u4e0a\u8f09%d \u6587\u4ef6"],"open_in_viewer":"\u5f9e\u67e5\u770b\u5668\u6253\u958b\u6240\u6709\u7db2\u9801","reviewing_instructions_send_failure":"\u4f60\u7684\u6307\u793a\u4e26\u6c92\u6709\u9001\u51fa\u3002\u8acb\u806f\u7e6b\u652f\u6301\u5e6b\u5fd9\u6392\u9664\u6545\u969c\u3002","analyze":"\u5206\u6790","order_documents_by":"\u6587\u4ef6\u6392\u5e8f\u6839\u64da","contact_documentcloud":"\u806f\u7e6bDocumentCloud","embed_document_viewer":"\u5d4c\u5165\u6587\u4ef6\u67e5\u770b\u5668","first_name":"\u540d\u5b57","insert_between_pages":"\u65bc\u7b2c%d\u9801\u81f3\u7b2c%d\u9801\u4e2d\u52a0\u5165","your_documents":"\u4f60\u7684\u6587\u4ef6","pending":"\u6b63\u7b49\u5f85","phone":"\u96fb\u8a71","published_url":"\u767c\u4f48\u4e86\u7684\u7db2\u5740","really_delete_x_docs":["\u771f\u7684\u8981\u522a\u9664\u6587\u4ef6\uff1f","\u771f\u7684\u8981\u522a\u9664%d\u6587\u4ef6\uff1f"],"draft":"\u8349\u7a3f","embed_note_step_one":"\u6b65\u9a5f\u4e00\uff1a\u9078\u64c7\u4e00\u7b46\u8a18\u4f86\u6ce8\u5d4c","shared_with_you_by":"%s \u8207\u4f60\u5206\u4eab","reviewer_remove_error":"\u522a\u9664\u8a55\u5be9\u54e1\u51fa\u73fe\u554f\u984c\u3002","save_page_order":"\u5132\u5b58\u9801\u5e8f","public_access":"\u516c\u958b\u67e5\u95b1","sort_by_relevance":"\u4f9d\u76f8\u95dc\u6027\u6392\u5e8f","note":"\u7b46\u8a18","length":"\u9577\u5ea6","state":"\u5dde","please_enter_email":"\u8acb\u8f38\u5165\u96fb\u5b50\u90f5\u4ef6\u5730\u5740\u3002","delete":"\u522a\u9664","already_has_account":"%s \u5df2\u6709\u5e33\u865f\u3002","page_tools":"\u9801\u9762\u5de5\u5177","document_viewer_size":"\u6587\u4ef6\u700f\u89bd\u5668\u7684\u5927\u5c0f","preview_search_embed_help":"\u5728\u7e7c\u7e8c\u4e4b\u524d\uff0c\u8acb\u82b1\u9ede\u6642\u9593\uff05s\u67e5\u95b1\u6587\u6a94\uff05s\u3002\u767c\u5e03\u4e86\u7684\u6587\u6a94\u53ef\u5f9e\u5b83\u5011\u6700\u521d\u88ab\u767c\u8868\u7684\u93c8\u7d50\u6253\u958b\uff0c\u800c\u5176\u4ed6\u516c\u5171\u6587\u4ef6\u53ef\u65bcDocumentCloud\u6253\u958b\u3002","calais_credit":"\u5be6\u9ad4\u7531OpenCalais\u63d0\u4f9b","force_ocr":"\u5f37\u884c\u9032\u884cOCR","enter_url_that_references":"\u8f38\u5165\u5f15\u7528\u6b64\u6587\u7ae0\u7684\u7db2\u5740","your_published_documents":"\u4f60\u767c\u4f48\u4e86\u7684\u6587\u4ef6","access_level":"\u8a2a\u554f\u7d1a\u5225","x_is_not_published":"\\\u201c\uff05s\\\u9084\u672a\u6709\u767c\u4f48\u3002","documents":"\u6587\u4ef6","form_contact_instructions":"\u4f7f\u7528\u8868\u683c\uff08\u6216\u767c\u96fb\u5b50\u90f5\u4ef6\u5230\uff05s\uff09\u806f\u7e6b\u6211\u5011\u3002\u5982\u679c\u60a8\u9700\u8981\u7acb\u5373\u56de\u61c9\u7684\u8a71\uff0c\u4f60\u53ef\u4ee5\u6253\u96fb\u8a71\uff08202\uff09505-1010\u3002\u66f4\u591a\u7684\u65b9\u5f0f\u53d6\u5f97\u806f\u7e6b\uff0c\u8acb\u53c3\u898b\uff05s\u3002","save_text":"\u5132\u5b58\u6587\u672c","back":"\u8fd4\u56de","publish_choose_display":"\u9078\u64c7\u4f60\u60f3\u8981\u986f\u793a\u6587\u4ef6\u65bc\uff05s \u5168\u9801\u9762\uff05 s\u6216\u662f\uff05\u56fa\u5b9a\u5927\u5c0f\u7684\u6846\u4e2d\uff05s\u3002","entities_explained":"\u4e0a\u9762\u5217\u51fa\u7684\u5be6\u9ad4\uff0c\u9644\u5408\u4f60\u7684\u641c\u5c0b\u3002\u8acb\u9078\u64c7\u4e00\u500b\u5be6\u9ad4\u4f86\u904e\u6ffe\u641c\u7d22\u7d50\u679c\u3002","add_note_instructions":"\u53cd\u767d\u90e8\u5206\u7db2\u9801\uff0c\u6216\u9ede\u64ca\u9801\u9762\u4e4b\u9593\u4f86\u5275\u5efa\u7b46\u8a18\u3002","before_continue":"\u5728\u7e7c\u7e8c\u4e4b\u524d\uff0c\u4f60\u53ef\u4ee5\u5230\uff05s","edit":"\u4fee\u6539","edit_page_text_done":"\u7576\u4f60\u5b8c\u6210\u4fee\u6539\u6587\u5b57\uff0c\u9ede\u64ca\u201c\u4fdd\u5b58\u6587\u5b57\u201d\u6309\u9215\u3002","set_the":"\u8a2d\u6210","embed_step_two_title":"\u6b65\u9a5f\u4e8c\uff1a\u914d\u7f6e\u6587\u4ef6\u67e5\u770b\u5668","timeline_for_doc":"%s\u7684\u6642\u9593\u8ef8","remove_pages_input":["\u522a\u9664\u9801\u9762","\u522a\u9664%d\u9801"],"log_out":"\u767b\u51fa","annotated_by":"\u8a3b\u91cb\u7531 %s \u63d0\u4f9b","private_note":"\u79c1\u4eba\u7b46\u8a18","add_private_note":"\u52a0\u5165\u79c1\u4eba\u7b46\u8a18","edit_data_for":"\u7de8\u8f2f\uff05s\u7684\u6578\u64da","embed_search_demo_error":"\u6a21\u64ec\u8cec\u6236\u4e0d\u5141\u8a31\u5d4c\u5165\u6587\u4ef6\u96c6\u3002  \u5982\u679c\u4f60\u9700\u8981\u4e00\u500b\u529f\u80fd\u9f4a\u5168\u7684\u5e33\u6236\u3002\u8acb%s \u806f\u7d61\u6211\u5011  %s\u3002\u63a5\uff05s\u9019\u88e1\uff05s\u4f86\u67e5\u770b\u5d4c\u5165\u4ee3\u78bc\u7684\u4f8b\u5b50\u3002","save_redactions":"\u5132\u5b58\u65b0\u7248\u672c","account_is_disabled":"%s \u5df2\u88ab\u95dc\u6389\u3002","edit_access":"\u66f4\u6539\u8a2a\u554f\u7d1a\u5225","resend_welcome_email":"\u91cd\u767c\u6b61\u8fce\u96fb\u90f5","contributor":"\u4f9b\u7a3f\u4eba","help_pages":"\u5e6b\u52a9\u9801\u9762","account":"\u5e33\u865f","view_timeline":"\u67e5\u770b\u6642\u9593\u8ef8","not_found_account":"\u6b64\u5e33\u6236\u6c92\u6709\u4efb\u4f55\u6587\u4ef6\u3002","apply_all_files":"\u9069\u7528\u65bc\u6240\u6709\u6587\u4ef6","first_page":"\u7b2c\u4e00\u9801","collaborators":"\u5408\u4f5c\u8005","role_administrator_for_x":"\u4f60\u662f\uff05s\u7684\u7ba1\u7406\u54e1","all_documents":"\u6240\u6709\u6587\u4ef6","private_documents_visible_instructions":["\u9019\u662f\u79c1\u4eba\u6587\u4ef6\u3002\u4f60\u8981\u628a\u5b83\u8a2d\u70ba\u516c\u5171\uff0c\u624d\u53ef\u986f\u65bc \\ \u60a8\u7684\u7db2\u7ad9\u6216\u662f\u5728DocumentCloud\u7684\u641c\u7d22\u76ee\u9304\u3002\u4f60\u53ef\u4ee5\u9078\u64c7\u628a\u5b83\u65bc\u65e5\u5f8c\u8a2d\u6210\u516c\u5171\uff0c\u6216\u8005\u60a8\u4e5f\u53ef\u4ee5\uff052 $ \u73fe\u5728\u5c31\u66f4\u6539\uff053 $ s\u3002"],"embed_show_sidebar_help":"\u5982\u679c\u4f60\u7684\u4f48\u5c40\u6a6b\u5411\u7a7a\u9593\u6709\u9650\uff0c\u53d6\u6d88\u9078\u4e2d\u6846\u9078\u9805\u4f86\u96b1\u85cf\u5074\u908a\u6b04\u3002","choose_location_to_insert_pages":"\u9078\u64c7\u4f4d\u7f6e\u63d2\u5165\u9801\u6578","TRUE":"\u6b63\u78ba","make_documents_public":"\u628a%s\u6587\u4ef6%s\u8a2d\u6210\u516c\u5171\u3002","edit_document_pairs":["\u4fee\u6539\u63cf\u8ff0\u672c\u6587\u4ef6\u7684\u9375/\u503c\u5c0d\u3002","\u4fee\u6539\u63cf\u8ff0\u6587\u4ef6\u7684\u9375/\u503c\u5c0d\u3002"],"no_appear_until_publish":"\u65bc\u516c\u4f48\u524d\uff0c\u4e0d\u6703\u51fa\u73fe\u3002","edit_page_text_instructions":"\u7de8\u8f2f\u4efb\u4f55\u9801\u9762\u7684\u6587\u5b57\uff1a\u4f7f\u7528\u6587\u4ef6\u9802\u90e8\u7684\u5c0e\u822a\u7bad\u982d\u3002\u5728\u9019\u88e1\u7de8\u8f2f\u7684\u6587\u5b57\u5c07\u4e0d\u6703\u6539\u8b8a\u539f\u4f86\u7684PDF\u3002","edit_document_data":"\u7de8\u8f2f\u6587\u6a94\u6578\u64da","reviewer_remove_permission_denied":"\u4f60\u4e0d\u5f97\u522a\u9664\u8a55\u5be9\u54e1\u3002","choose_note":"\u9078\u64c7\u7b46\u8a18","no_section_outside_doc":"\u7121\u6cd5\u65bc\u6587\u4ef6\u5916\u5275\u5efa\u4e00\u500b\u7ae0\u7bc0\u3002","full_page":"\u5168\u9801","modify_original_document":"\u4fee\u6539\u539f\u59cb\u6587\u4ef6","by_length":"\u4f9d\u9577\u5ea6","open_published_version":"\u6253\u958b\u5df2\u767c\u5e03\u7684\u7248\u672c","contributed_by":"\u4f9b\u7a3f\u4eba","confirm_remove_all_data":"\u4f60\u78ba\u5b9a\u8981\u5f9e\uff05s\u522a\u9664\u7684\u6240\u6709\u8cc7\u6599\uff1f","edit_document_info":"\u66f4\u6539\u6587\u4ef6\u8cc7\u6599","sort_by_source":"\u4f9d\u4f86\u6e90\u6392\u5e8f","private_to":"\u53ea\u6709%s\u624d\u53ef\u79c1\u4eba\u67e5\u95b1","show_all":"\u986f\u793a\u6240\u6709","x_mentions":["\u4e00\u500b\u63d0\u53ca","%d\u63d0\u53ca"],"edit_details":"\u7de8\u8f2f\u7d30\u7bc0","saved":"\u5df2\u4fdd\u5b58\u3002","related_url_of_document":"\u9023\u63a5\u5230\u672c\u6587\u4ef6\u7684","show_pages":"\u986f\u793a\u9801\u9762","or":"\u6216\u662f","removed_from_x_documents":["\u7531%s\u8d77\u522a\u9664\u6587\u4ef6","\u7531%s\u8d77\u522a\u9664%d\u6587\u4ef6"],"public_access_help":"\u4efb\u4f55\u4eba\u65bc\u7db2\u4e0a\u5747\u53ef\u641c\u5c0b\u53ca\u67e5\u95b1\u5230\u6587\u4ef6\u3002","x_documents":"%d \u6587\u4ef6","insert_pages_shift_key":"\u8981\u4e00\u6b21\u904e\u66f4\u63db\u591a\u9801\uff0c\u8acb\u6309\u4f4fshift\u9375\u4f86\u9078\u64c7\u591a\u9801\u3002\u7576\u4f60\u6e96\u5099\u597d\u6642\uff0c\u9ede\u64ca\u201c\u4e0a\u50b3\u9801\u9762\u201d\u6309\u9215\u3002","contact_us":"\u806f\u7d61\u6211\u5011","share_x_documents":["\u5206\u4eab\u6587\u4ef6","\u5206\u4eab\u9019\u4e9b\u6587\u4ef6"],"double_check_disable":"\u771f\u7684\u8981\u95dc\u6389\u5e33\u865f\uff1f","document_already_public":"\u9019\u4efd\u6587\u4ef6\u5df2\u7d93\u516c\u958b\u3002","featured_reporting_list":"\u4f60\u53ef\u4ee5\u65bc\u540d\u55ae\u4e0a\u7684\uff05s \u7279\u9078\u5831\u544a\uff05\u627e\u5230\u5d4c\u5165\u5f0f\u641c\u7d22\u7684\u4f8b\u5b50\u3002","over_x_mentions":"\u8d85\u904e%d\u63d0\u53ca","sort":"\u6392\u5e8f","featured_examples_list":"\u4f60\u53ef\u4ee5\u5f9e\uff05s\u7cbe\u9078\u5831\u544a\uff05s\u4e2d\u627e\u5230\u5f88\u591a\u5d4c\u5165\u5f0f\u6587\u4ef6\u7684\u4f8b\u5b50\u3002","reviewing_instructions_multiple_sent_to":"\u8a55\u5be9%d\u7684\u64cd\u4f5c\u8aaa\u660e\u5df2\u50b3\u9001\u5230\uff05s","embed_hide_text_tab_help":"\u5982\u679c\u6587\u6a94\u7684\u6587\u672c\u8cea\u91cf\u662f\u8f03\u5dee\u7684\uff0c\u53d6\u6d88\u9078\u4e2d\u6846\u9078\u9805\u4f86\u96b1\u85cf\u6587\u5b57\u9078\u9805\u3002","note_ellipsis":"\u7b46\u8a18...","add":"\u52a0\u5165","workspace":"\u5de5\u4f5c\u5340","project_owner":"\u9805\u76ee\u4e3b\u7ba1","removing":"\u6b63\u5728\u522a\u9664...","public_on":"\u516c\u958b\u65bc","must_upload_something":"\u4f60\u81f3\u5c11\u8981\u4e0a\u50b3\u4e00\u4efd\u6587\u4ef6\u3002","step_x_of_x":"\u6b65\u9a5f\ufe6ad\u4e26\u6709\ufe6ad ","insert_replace_pages":"\u52a0\u5165\u7b46\u8a18\uff0f\u66ff\u4ee3\u9801\u9762","manage_organization":"\u7ba1\u7406\u6a5f\u69cb%s","introduction":"\u4ecb\u7d39","zoom_out":"\u7e2e\u5c0f","manage":"\u7ba1\u7406","private_access":"\u79c1\u4eba\u67e5\u95b1","cancel":"\u53d6\u6d88","page":"\u9801","downloading_progress":["\u6b63\u6e96\u5099\u4e0b\u8f09\"%2$s\" ","\u6b63\u6e96\u5099\u4e0b\u8f09%d \u6587\u4ef6"],"document_publish_private_help":"\u9019\u4efd\u6587\u4ef6\u662f\u79c1\u4eba\u7684\u3002\u5728\u4f60\u628a\u5b83\u516c\u958b\u4e4b\u524d\uff0c\u4f60\u7684\u8b80\u8005\u5c07\u4e0d\u6703\u770b\u5230\u3002\u66f4\u6539\uff05s\u700f\u89bd\u7d1a\u5225\uff05\u6216\uff05s\u51fa\u7248\u65e5\u671f","text_reprocess_help":"\u91cd\u65b0\u8655\u7406\u6587\u4ef6\uff0c\u5617\u8a66\u6211\u5011\u6539\u9032\u4e86\u7684\u6587\u5b57\u63d0\u53d6\u5de5\u5177\u3002\u518d\u52a0\u5de5\u524d\uff0c\u9078\u64c7\u201c Force OCR\uff08\u5149\u5b78\u5b57\u7b26\u8b58\u5225\uff09 \u4f86\u5ffd\u7565\u4efb\u4f55\u5d4c\u5165\u5f0f\u6587\u672c\u4fe1\u606f\u548c\u4f7f\u7528TESSERACT \u3002\u8a72\u6587\u4ef6\u5c07\u65bc\u91cd\u5efa\u6642\u95dc\u9589\u3002\u60a8\u78ba\u5b9a\u8981\u7e7c\u7e8c\u55ce\uff1f","contact_reviewer":"\u5982\u679c\u60a8\u9700\u8981\u4efb\u4f55\u5e6b\u52a9\uff0c\u806f\u7e6b\u5728\uff05s\u7684\uff05s\uff0c\u6216\u8a2a\u554f\uff05s\u8981\u66f4\u591a\u6709\u95dcDocumentCloud\u7684\u4fe1\u606f\u3002","last_name":"\u59d3","set_publication_date_for":"\u70ba\uff05s\u8a2d\u7f6e\u51fa\u7248\u65e5\u671f","edit_x":"\u4fee\u6539 \uff05s","sort_documents_by":"\u6392\u5e8f\u6587\u4ef6\u6839\u64da","x_notes":"%d \u9801\u7b46\u8a18","administrator":"\u7ba1\u7406\u54e1","save":"\u5132\u5b58","note_embed_private":"\u9019\u662f\u79c1\u4eba\u6587\u4ef6\u3002\u65bc\u672a\u8a2d\u70ba\u516c\u958b\u6587\u4ef6\u524d\uff0c\u516c\u773e\u4e0d\u80fd\u700f\u89bd\u6587\u4ef6\u3002\u73fe\u5728\u66f4\u6539%s\u8a2a\u554f\u7d1a\u5225%s\u3002","close":"\u95dc\u9589","  role_reviewer_for_x":"\u4f60\u662f\uff05s\u7684\u8a55\u5be9\u54e1","your_organization":"\u4f60\u7684\u6a5f\u69cb","redact_document":"\u7de8\u8f2f\u6587\u4ef6","disable":"\u95dc\u6389","of":"\u4e4b","make_public_on":"\u516c\u958b\u65bc","export":"\u8f38\u51fa\n","remove_file":"\u522a\u9664\u6587\u4ef6","timeline_must_select":"\u8acb\u9078\u64c7\u4e00\u4e9b\u6587\u4ef6\u4f86\u67e5\u770b\u6642\u9593\u8868\u3002","document_access_updated":["\u8a2a\u554f\u7d1a\u5225\u5b8c\u6210\u66f4\u65b0","%d\u7684\u6587\u4ef6\u8a2a\u554f\u7d1a\u5225\u5b8c\u6210\u66f4\u65b0"],"help":"\u6c42\u52a9","download_text":"\u4e0b\u8f09\u5168\u6587\u5b57","x_pages":"\u9801","private_note_visible":"\u9019\u79c1\u4eba\u7b46\u8a18\u53ea\u6709\u4f60\u80fd\u67e5\u770b\u3002","reviewer":"\u8a55\u5be9\u54e1","uploading":"\u4e0a\u8f09\u4e2d","document_publish_embed_test":"\u5982\u679c\u4f60\u60f3\u5728\u51fa\u7248\u524d\u6e2c\u8a66\u5d4c\u5165\uff0c\u8acb\u78ba\u4fdd\u4f60\u4f7f\u7528\u5b89\u5168\u7684HTTPS URLS\u4f86\u7de8\u8f2f\u5d4c\u5165\u4ee3\u78bc\uff0c\u7136\u5f8c\u65bc\u4f7f\u6587\u6a94\u8a2d\u70ba\u516c\u5171\u67e5\u95b1\uff0c\u518d\u5207\u63db\u56de\u5e38\u7528\u7684HTTP\u3002","document_has_no_public_notes":"\u6b64\u6587\u4ef6\u6c92\u6709\u516c\u5171\u7b46\u8a18\u3002","annotation":"\u8a3b\u91cb","document_error_message":"\u6211\u5011\u7684\u7cfb\u7d71\u7121\u6cd5\u8655\u7406\u6b64\u6587\u4ef6\u3002\u6211\u5011\u5df2\u7d93\u8a18\u4e0b\u554f\u984c\uff0c\u4e26\u6703\u5b9a\u671f\u6aa2\u8a0e\u9019\u4e9b\u932f\u8aa4\u3002\u8acb\u53c3\u8003\u6211\u5011\u7684%s \u4fee\u7406\u6545\u969c\u7684\u5efa\u8b70%s\u6216%s \u806f\u7d61\u6211\u5011 \uff05s \u5373\u6642\u63f4\u52a9\u3002\n\n","privacy":"\u96b1\u79c1","edit_page_text":"\u4fee\u6539\u9801\u9762\u6587\u5b57","term":"\u689d\u6b3e","x_is_no_longer_a_reviewer_on_x":["%2$s\u518d\u662f\u6587\u4ef6\u4e0a\u7684\u8a55\u5be9\u54e1","%2$s\u518d\u662f%1$d\u6587\u4ef6\u4e0a\u7684\u8a55\u5be9\u54e1"],"no_entities_found":"\u6c92\u6709\u4efb\u4f55\u5be6\u9ad4\u7b26\u5408\u4f60\u7684\u641c\u7d22\u3002","popular_documents":"\u71b1\u9580\u6587\u4ef6","replace_page_x":"\u66ff\u4ee3\u9801\u6578 %d","add_public_note_warn":"\u6240\u6709\u516c\u773e\u5747\u53ef\u700f\u89bd\u516c\u5171\u7b46\u8a18","edit_sections":"\u66f4\u6539\u4f4d\u7f6e","select_single_to_open":"\u8acb\u9078\u64c7\u8981\u6253\u958b\u7684\u6587\u6a94\u3002","has_no_entities":"\uff05s\u6c92\u6709\u986f\u793a\u5be6\u9ad4\u3002","upload":"\u4e0a\u8f09","notes_hidden_while_redacting":"\u65b0\u7248\u672c\u6b63\u5728\u9032\u884c\u6642\uff0c\u4efb\u4f55\u73fe\u6709\u7684\u7b46\u8a18\u5c07\u88ab\u66ab\u6642\u96b1\u85cf\u8d77\u4f86\u3002","related_article_url_help":"\u8acb\u63d0\u4f9b\u5f15\u7528\u4e86\u6b64\u6587\u7ae0\u7684URL\uff3c\u6587\u7ae0\u7684\u67e5\u770b\u5668\u5c07\u5141\u8a31\u76f8\u95dc\u6587\u7ae0\u201d\u93c8\u63a5\u3002\u8a31\u591a\u8b80\u8005\uff3c\u5f9e\u7db2\u7d61\u641c\u7d22\u4f86\u5230\u6587\u4ef6\uff0c\u93c8\u63a5\u5c07\u5f15\u5c0e\u4ed6\u5011\u56de\u5230\u539f\u59cb\u6587\u6a94\u3002","edit_title":"\u66f4\u6539\u6a19\u984c","broken_document":"\u6587\u4ef6\u6709\u554f\u984c","must_have_doc_title":["\u8acb\u70ba\u6587\u4ef6\u8f38\u5165\u984c\u76ee","\u8acb\u70ba\u6240\u6709\u6587\u4ef6\u8f38\u5165\u4e00\u500b\u984c\u76ee"],"search":"\u641c\u5c0b","embed_show_text_tab":"\u986f\u793a\u6587\u672c\u6a19\u7c64","timeline_zoom_in":"\u62d6\u52d5\u4e00\u7cfb\u5217\u65e5\u671f\u4f86\u9032\u884c\u653e\u5927\u3002","reviewer_enter_email":"\u8f38\u5165\u7b2c\u4e00\u500b\u9080\u8acb\u7684\u8a55\u5be9\u54e1\u96fb\u5b50\u90f5\u4ef6\u5730\u5740\uff1a","  role_freelancer_for_x":"\u4f60\u662f\uff05s\u7684\u81ea\u7531\u4f9b\u7a3f\u4eba","show_all_x_pages":["\u986f\u793a\u55ae\u9801","\u986f\u793a\u5168\u90e8\u5171%d\u9801"],"x_invited_to_review_x":"\uff05s\u9080\u8acb\u60a8\u6aa2\u95b1\uff05s","welcome_message_sent_to":"\u6b61\u8fce\u96fb\u90f5\u5df1\u767c\u9001\u5230%s.","pg":"\u7b2c\u9801","sort_by_date_uploaded":"\u4f9d\u65e5\u671f\u6392\u5e8f","no_past_publication":"\u4f60\u4e0d\u80fd\u8a2d\u7f6e\u6587\u4ef6\u516c\u4f48\u65e5\u671f\u70ba\u904e\u53bb\u7684\u65e5\u5b50\u3002","embed_tools":"\u52a0\u5165\u5de5\u5177","by_title":"\u4f9d\u6a19\u984c","embed_note_step_two":"\u6b65\u9a5f\u4e8c\uff1a\u8907\u88fd\u548c\u7c98\u8cbc\u5d4c\u5165\u4ee3\u78bc","embed_search_step_one":"\u6b65\u9a5f\u4e00\uff1a\u914d\u7f6e\u5d4c\u5165\u6587\u6a94","demo_no_viewer":"\u6a21\u64ec\u8cec\u6236\u4e0d\u80fd\u4e0b\u8f09\u67e5\u770b\u5668\u3002 %s\u4f60\u9700\u8981\u4e00\u500b\u529f\u80fd\u9f4a\u5168\u7684\u5e33\u6236\u3002","password_updated":"\u5bc6\u78bc\u5df2\u66f4\u65b0","embed_a_note":"\u5d4c\u5165\u7b46\u8a18","edit_text_any_page":"\u66f4\u65b0\u4efb\u4f55\u9801\u6578\u7684\u6587\u672c","guided_tour":"\u5c0e\u8cde\u5718","disabled":"\u5df2\u95dc\u6389","added_to_x_documents":["\u65bc%s\u4e2d\u52a0\u5165\u6587\u4ef6","\u65bc%s\u4e2d\u52a0\u5165%d\u6587\u4ef6"],"open_published":"\u6253\u958b\u516c\u4f48\u4e86\u7684\u7248\u672c","pages_are_being_removed":"\u9019\u9801\u9762\u6b63\u88ab\u522a\u9664\uff0c\u8acb\u95dc\u9589\u6b64\u6587\u4ef6\u3002","x_collaborators":["\u4e00\u4f4d\u5408\u4f5c\u8005","%d \u5408\u4f5c\u8005"],"change_password":"\u4fee\u6539\u5bc6\u78bc","reprocess_text":"\u91cd\u65b0\u8655\u7406\u6587\u5b57","finish":"\u5b8c\u6210","sort_by_title":"\u4f9d\u6a19\u984c\u6392\u5e8f","red":"\u7d05\u8272","enter_title_and_page":"\u8acb\u6dfb\u52a0\u6a19\u984c\u548c\u9801\u78bc\u7684\u6bcf\u500b\u90e8\u5206\u3002","timeline_max_documents":"\u60a8\u53ea\u80fd\u5728\u540c\u4e00\u6642\u9593\u8ef8\u67e5\u770b\u5341\u4efd\u6587\u4ef6\u7684\u6642\u9593\u3002","apply_fields_all_files":"\u61c9\u7528\u6b64\u8aaa\u660e\u3001\u4f86\u6e90\u548c\u8a2a\u554f\u7d1a\u5225\u5230\u6240\u6709\u6587\u4ef6","remove_line_breaks":"\u522a\u9664\u63db\u884c","link_to_pdf":"\u93c8\u63a5\u5230\u539f\u59cbPDF","embed_note_demo_error":"\u6a21\u64ec\u8cec\u6236\u662f\u4e0d\u5141\u8a31\u5d4c\u5165\u7b46\u8a18\u3002 \uff05s \u806f\u7d61\u6211\u5011 \uff05s \u5982\u679c\u4f60\u9700\u8981\u4e00\u500b\u529f\u80fd\u9f4a\u5168\u7684\u5e33\u6236\uff0c\u8acb \uff05s \u806f\u7d61\u6211\u5011 \uff05s\u3002\u6309\uff05s\u9019\u88e1\uff05s\u67e5\u770b\u5d4c\u5165\u4ee3\u78bc\u7684\u4f8b\u5b50\u3002","remove_all":"\u5168\u90e8\u522a\u9664","freelancer":"\u81ea\u7531\u4f9b\u7a3f\u4eba","demo_embed_error":"\u6a21\u64ec\u8cec\u6236\u662f\u4e0d\u8a31\u5d4c\u5165\u6587\u6a94\u96c6\u3002\u5982\u679c\u4f60\u9700\u8981\u4e00\u500b\u529f\u80fd\u9f4a\u5168\u7684\u5e33\u6236\u3002 \u8acb\uff05s \u806f\u7e6b\u6211\u5011\uff05s  \u67e5\u770b\u5d4c\u5165\u4ee3\u78bc\u7684\u4f8b\u5b50 \uff05s\u9019\u88e1\uff05s \u3002","x_public_documents":"\uff05d \u516c\u958b\u6587\u4ef6","make_document_public":"\u628a\u6587\u6a94\u8a2d\u70ba\u516c\u5171\u3002","embed_document_list":"\u5d4c\u5165\u6587\u4ef6\u6e05\u55ae","create_new_project":"\u5275\u7acb\u4e00\u500b\u65b0\u9805\u76ee","reader_workspace_language":"\u8b80\u8005\uff0f\u5de5\u4f5c\u5340\u8a9e\u8a00","project_id":"\u9805\u76ee\u7de8\u865f\uff1a\uff05s","redact_instructions":"\u65bc\u4f60\u60f3\u7de8\u8f2f\u7684\u6587\u4ef6\u4f4d\u7f6e\uff0c\u9ede\u64ca\u4e26\u62d6\u52d5\u9f20\u6a19\u7e6a\u88fd\u4e00\u500b%s\u7684\u77e9\u5f62\u3002\u7576\u4f60\u4fdd\u5b58\u65b0\u7248\u672c\u6642\uff0c\u76f8\u95dc\u7684\u6587\u672c\u5c07\u88ab\u522a\u9664\u3002","sort_by_length":"\u4f9d\u9577\u5ea6\u6392\u5e8f","public_documents_help":"\u5728\u4e0a\u9762\u7684\u5217\u8868\u4e2d\u9078\u64c7\u4e00\u500b\u8ca2\u737b\u7684\u7d44\u7e54\u4f86\u67e5\u770b\u4ed6\u5011\u7684\u516c\u958b\u6587\u4ef6\u3002","at":"\u5728","reorder_pages":"\u9801\u9762\u91cd\u65b0\u6392\u5e8f","show_less":"\u986f\u793a\u8f03\u5c11","tools_help":"\u6211\u5011\u7684\uff05s\u53ef\u4ee5\u5e6b\u52a9\u4f60\u6211\u5011\u7684\uff05s\u548c\uff05s\u5de5\u5177\u3002","enter_new_password":"\u8f38\u5165\u60a8\u7684\u65b0\u5bc6\u78bc","account_add_failure":"\u7121\u6cd5\u6dfb\u52a0\u5e33\u6236\u3002","add_html_for_viewer":"\u6dfb\u52a0\u6b64HTML\u5230\u60a8\u7684\u7db2\u7ad9\u4f86\u5275\u5efa\u4e00\u500b\u6587\u6a94\u67e5\u770b\u5668\u3002","no_embed_permission":"\u4f60\u6c92\u6709\u6b0a\u529b\u5d4c\u5165\u8a72\u6587\u4ef6\u3002","email_when_complete":"\uff05s\u6587\u4ef6\uff05s\u8655\u7406\u5b8c\u7562\u5f8c\u767c\u9001\u90f5\u4ef6\u7d66\u6211\u3002","publish":"\u767c\u8868","reviewing_instructions_single_sent_to":"\u8a55\u5be9\u7684\u64cd\u4f5c\u8aaa\u660e\uff05s\u5df2\u50b3\u9001\u5230\uff05s","reorder_hint":"\u62d6\u62fd\u4f86\u91cd\u65b0\u6392\u5e8f\u3002","or_remove_all_data":"\u6216\u662f\u79fb\u9664\u6240\u6709\u8cc7\u6599\u3002","country":"\u570b\u5bb6","published_documents":"\u767c\u4f48\u4e86\u7684\u6587\u4ef6","password_no_blank":"\u60a8\u7684\u5bc6\u78bc\u4e0d\u80fd\u662f\u7a7a\u7684\u3002","troubleshooting_uploads":"\u6545\u969c\u6392\u9664\u4e0a\u50b3\u5931\u6557","not_found_published":"\u6b64\u6a5f\u69cb\u6c92\u6709\u4efb\u4f55\u6587\u4ef6\u3002","select_single_to_embed":"\u8acb\u9078\u64c7\u4e00\u6587\u4ef6\u4ee5\u5275\u5efa\u5d4c\u5165\u3002","reprocess":"\u91cd\u65b0\u8655\u7406\n","revoke":"\u64a4\u56de","draft_note_visible":"\u9019\u79c1\u4eba\u7b46\u8a18\u53ea\u6709\u4f60\u548c\u4f60\u7684\u5408\u4f5c\u4f19\u4f34\u80fd\u67e5\u770b\u3002","embed_viewer_opens_to_help":"\u544a\u8a34\u67e5\u770b\u5668\u76f4\u63a5\u6253\u958b\u7279\u5b9a\u7684\u7db2\u9801\u6216\u8a3b\u91cb\u3002","insert_pages_instructions":"\u8981\u5728\u4e00\u7279\u5b9a\u7684\u4f4d\u7f6e\u52a0\u63d2\u65b0\u9801\u9762\uff0c\u8acb\u65bc\u9801\u9762\u4e4b\u9593\u6309\u4e0b\u6ed1\u9f20\u3002\u5982\u679c\u4f60\u60f3\u66f4\u63db\u7279\u5b9a\u9801\u9762\uff0c\u8acb\u5728\u8981\u522a\u9664\u7684\u9801\u9762\u4e0a\u6309\u4e0b\u6ed1\u9f20\u3002","select_pages_remove":"\u9078\u64c7\u4f60\u60f3\u522a\u9664\u7684\u9801\u9762\u3002","link_to_pdf_help":"\u53d6\u6d88\u9078\u53d6\u6846\u4f86\u522a\u9664\u5f9e\u6587\u4ef6\u700f\u89bd\u5668\u7684PDF\u93c8\u63a5\u3002","insert_last_page":"\u6700\u5f8c\u4e00\u9801\u5f8c\u52a0\u5165","organization":["\u7d44\u7e54","\u6a5f\u69cb"],"annotated_documents":"\u6ce8\u91cb\u4e86\u7684\u6587\u4ef6","allow_readers_to_search":"\u5141\u8a31\u8b80\u8005\u641c\u7d22\u9019\u4e00\u5957\u6587\u4ef6","the_api":"DocumentCloud API","add_a_collaborator":"\u52a0\u5165\u5408\u4f5c\u8005","add_private_note_warn":"\u53ea\u6709\u4f60\u624d\u80fd\u770b\u5230\u4f60\u7684\u79c1\u4eba\u7b46\u8a18\u3002","searching_dd":"\u641c\u7d22\u6587\u4ef6\u548c\u8cc7\u6599","annotation_help":"\u4f7f\u7528\u53f3\u9762\u7684\u93c8\u7d50\u4f86\u8a3b\u91cb\u6587\u6a94\u3002\u8acb\u8a18\u4f4f\\\u4efb\u4f55\u5176\u4ed6\u4eba\u5c31\u80fd\u770b\u5230\u516c\u958b\u7684\u8a3b\u91cb\u548c\u8349\u7a3f\u3002\u79c1\u4eba\\\u8a3b\u89e3\u662f\u4f9b\u81ea\u5df1\u53c3\u8003\u3002\u5373\u4f7f\u662f\uff05s\u4ed6\u5011\u4e5f\u4e0d\u80fd\u770b\u5230\u3002","select_with_public_note":"\u8acb\u9078\u64c7\u4e00\u6587\u6a94\u81f3\u5c11\u6709\u4e00\u500b\u516c\u5171\u7b46\u8a18\u3002","new_account":"\u65b0\u5e33\u865f","remove":"\u522a\u9664","entities_unavailable":"\u5be6\u9ad4\u66ab\u6642\u4e0d\u53ef\u7528\u3002","in_project":"\u5728\u9019\u9805\u76ee\u4e2d","  role_contributor_for_x":"\u4f60\u662f\uff05s\u7684\u4f9b\u7a3f\u4eba","publishing_embedding":"\u6b63\u51fa\u7248\u53ca\u6b63\u5d4c\u5165","editing_notes_sections":"\u4fee\u6539\u7b46\u8a18\u53ca\u7ae0\u7bc0","new_documents":"\u65b0\u6587\u4ef6","place":"\u5730\u65b9","timeline_for_x_docs":"%d \u6587\u4ef6\u7684\u6642\u9593\u8ef8","preview_viewer":"\u5728\u7e7c\u7e8c\u4e4b\u524d\uff0c\u8acb\u82b1\u9ede\u6642\u9593\uff05  \u770b\u770b \uff05s\u7684\u6587\u4ef6\u67e5\u770b\u5668\u3002","document_public_on":"\u9019\u4efd\u6587\u4ef6\u5c07\u516c\u958b\u65bc\uff05s","paragraph_description_of_document":"\u6587\u4ef6\u6bb5\u843d\u63cf\u8ff0","email":"\u96fb\u5b50\u90f5\u4ef6\u5730\u5740","accounts":"\u7d44\u7e54","city":"\u57ce\u5e02","black":"\u9ed1\u8272","share_project":"\u5206\u4eab\u9019\u6587\u4efd","x_still_processing":"\"%s\"\u6b63\u5728\u8655\u7406\u4e2d\u3002\u8acb\u7b49\u5f85\u5b83\u5b8c\u6210\u3002","cannot_remove_all":"\u4f60\u4e0d\u80fd\u522a\u9664\u9019\u6587\u4ef6\u4e2d\u6240\u6709\u9801\u9762\u3002","uploading_documents":"\u4e0a\u50b3\u6587\u4ef6","document_processing_count":["\u4e00\u4efd\u6587\u4ef6\u6b63\u5728\u8655\u7406\u3002","%d\u4efd\u6587\u4ef6\u6b63\u5728\u8655\u7406\u3002"],"export_to_overview_explain":"\u4f60\u5c07\u662f\u8f38\u51fa\u5230\u6982\u8ff0\u6a21\u5f0f\u3002\u4f60\u5fc5\u9808\u5275\u5efa\u4e00\u500b\u6982\u8ff0\u6a21\u5f0f\u5e33\u6236\uff0c\u4f60\u5fc5\u9808\u63d0\u4f9b\u6982\u8ff0\u6a21\u5f0f\uff0c\u60a8DocumentCloud\u7684\u7528\u6236\u540d\u548c\u5bc6\u78bc\u3002","text_tools":"\u6587\u5b57\u5de5\u5177","description":"\u95dc\u65bc","embed_url_of_document":"\u5927\u591a\u6578\u7528\u6236\u5c07\u4e0d\u9700\u8981\u52a0\u4e0a\u9019\u500b\u3002\u9019\u500b\u6587\u4ef6\u5d4c\u5165\u9801\u9762\u7684URL\u662f","edit_related_url":"\u66f4\u6539\u95dc\u65bc\u6587\u4ef6\u7684\u7db2\u5740","remove_pages_click":"\u9ede\u64ca\u6240\u6709\u4f60\u60f3\u522a\u9664\u7684\u9801\u9762\u3002","not_found_group":"\u6b64\u6a5f\u69cb\u6c92\u6709\u4efb\u4f55\u6587\u4ef6\u3002","terms":"\u689d\u6b3e","home":"\u4e3b\u9801","insert_pages_message":"\u6587\u4ef6\u5c07\u65bc\u91cd\u5efa\u6642\u95dc\u9589\u3002\u8f03\u9577\u7684\u6587\u4ef6\uff0c\u53ef\u80fd\u9700\u8981\u5f88\u9577\u7684\u6642\u9593\u4f86\u91cd\u5efa\u3002","enter_url_for_embed":["\u8f38\u5165\u5728\u672c\u6587\u6a94\u4e2d\u5d4c\u5165\u4e86\u7684URL","\u8f38\u5165\u5728\u9019\u4e9b\u6587\u6a94\u4e2d\u5d4c\u5165\u4e86\u7684URL"],"title":"\u6a19\u984c","download_viewer":"\u4e0b\u8f09\u6587\u6a94\u67e5\u770b\u5668","remove_pages_done":"\u7576\u4f60\u9078\u64c7\u9801\u9762\u5f8c\uff0c\u9ede\u64ca\u201c\u522a\u9664\u9801\u9762\u201d\u6309\u9215\u3002","next":"\u5230\u4e0b\u4e00\u9801","remove_from_project":"\u5f9e\u9019\u500b\u9805\u76ee\u4e2d\u522a\u9664\n","preview_email":"\u9810\u89bd\u96fb\u5b50\u90f5\u4ef6\u6d88\u606f","reorder_pages_done":"\u7576\u4f60\u5b8c\u6210\u6e05\u7406\uff0c\u9ede\u64ca\u201c\u4fdd\u5b58\u9801\u9762\u9806\u5e8f\u201d\u6309\u9215\uff0c\u4fdd\u5b58\u6240\u505a\u7684\u66f4\u6539\u3002","close_while_text_reprocess":"\u6587\u672c\u6b63\u5728\u8655\u7406\u4e2d\u3002\u8acb\u95dc\u9589\u6587\u4ef6\u3002","for_example_data":"\u4f8b\u5982\uff1a","documents_per_page":"\u6bcf\u9801\u986f\u793a\u6587\u4ef6","include_optional_msg":"\u53ef\u9078\u64c7\u52a0\u5165\u500b\u4eba\u4fe1\u606f\u3002","set_access":"\u8a2d\u5b9a\u8a2a\u554f\u7d1a\u5225","embed_step_one_title":"\u6b65\u9a5f\u4e00\uff1a\u56de\u9867\u201c%s\u201d","x_private_documents":"\uff05d \u79c1\u4eba\u6587\u4ef6","by_source":"\u4f9d\u4f86\u6e90","person":"\u4eba\u58eb","reviewer_name":"\u8acb\u63d0\u4f9b\u8a55\u5be9\u54e1\u540d\u5b57\u3002","reviewer_email_message":"DocumentCloud\u53ef\u96fb\u5b50\u90f5\u4ef6\u6307\u4ee4\u5230\uff05s\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u500b\u4eba\u4fe1\u606f\u3002","embed_show_sidebar":"\u986f\u793a\u5074\u908a\u6b04","date":"\u65e5\u671f","edit_description":"\u66f4\u6539\u63cf\u8ff0","embed_step_three_title":"\u6b65\u9a5f\u4e09\uff1a\u8907\u88fd\u53ca\u7c98\u8cbc\u5d4c\u5165\u4ee3\u78bc","share_documents":"\u5206\u4eab\u9019\u4e9b\u6587\u4efd","guides_howtos":"\u6307\u5357\u53ca\u5982\u4f55","publication_date":"\u51fa\u7248\u65e5\u671f","enter_email_address":"\u8f38\u5165\u96fb\u5b50\u90f5\u4ef6\u5730\u5740","replace_multiple_pages":"\u66ff\u4ee3\u7b2c%d\u9801\u81f3\u7b2c%d\u9801","print_notes":"\u6253\u5370\u7b46\u8a18"}
});

