<chat>
	<div id="chatplusview" class="chatplusview-{ opts.appearance.themeName } { front:status=='no_chat'||status=='wait_chat'&&!inChatWaiting||status=='no_agent', queued:status=='wait_chat', end:status=='close_chat_by_visitor'||status=='close_chat_by_agent'||status=='close_chat_by_mute', contact:status=='no_agent', no-contact:(status=='no_agent'&&opts.appearance.disconnect_disable) } {closed:windowStatus=='close'} { headless:headless || windowStatus=='close' && ((!mobileFlag && opts.appearance.eyeCatcher.only && !(opts.appearance.eyeCatcher.offbar && status=='no_agent'))||(mobileFlag && opts.appearance.eyeCatcher.only_sp && !(opts.appearance.eyeCatcher.offbar_sp && status=='no_agent')))} { large-header:opts.appearance.themeParams.spLargeHeader } {no_prompt:(no_prompt || (no_bot_prompt && (status == 'in_chatbot' || status == 'wait_chat' && inChatWaiting)))} {compressed: compressed} { float:opts.appearance.themeParams.floatdesign }">
		<div id="outline" style="border-color:{ opts.appearance.themeParams.border } !important;background-color: transparent !important;" if={ status=="no_chat" }>
		<div id="chatpluscontent">
			<div id="eye_catcher" if={eyeCatcher.active && !(opts.appearance.end.noeyecatcher && (self.status == 'close_chat_by_visitor' || self.status == 'close_chat_by_agent' || self.status == 'close_chat_by_mute'))} onclick={ open }>
				<img if={ opts.appearance.eyeCatcher.image } src="{ opts.appearance.eyeCatcher.image }">
				<img if={ !opts.appearance.eyeCatcher.image } src="https://appimg.chatplus.jp/app/s/eyecatcher/2.png">
				<a class="button-hide" onclick={hideWindow} if={windowStatus=="close"}><i class="cpfar fa-times fa-lg"></i></a>
			</div>
			<div id="chatplusheader">
				<div id="profile" class="profile" style="cursor:pointer" onclick={ open }>
				<span class="name">{ opts.appearance.start.title }</span>
				</div>
				<div class="operate">
				<a class="button-expand" onclick={expand} if={compress_enabled && compressed}><i class="cpfas fa-expand-alt fa-lg"></i></a>
				<a class="button-compress" onclick={compress} if={compress_enabled && !compressed}><i class="cpfas fa-compress-alt fa-lg"></i></a>
				<a class="button-close" onclick={closeWindow} if={windowStatus!="close"}><i class="cpfar fa-minus-square fa-lg"></i></a>
				<a class="button-hide" onclick={hideWindow} if={windowStatus=="close"}><i class="cpfar fa-times fa-lg"></i></a>
				</div>
			</div><!-- header -->
			<div id="body" style="background-color:{ opts.appearance.themeParams.background }">
				<h2><div class="icon"><i class="cpfas fa-comments fa-3x" style="color:{ opts.appearance.themeName !=='modern' ? opts.appearance.themeParams.border : opts.appearance.themeParams.button }"></i></div><div class="text"><abr content="{ variableTexts.startExplanation }" cptag="1" /></div></h2>

				<form id="form-start" class="form-horizontal" onsubmit="return false;">
				<div id="name_form_group" class="form-group" if={ opts.appearance.start.getName }>
					<label class="col-sm-4 control-label" id="oastn701">{ opts.appearance.start.titleName || "名前" }<span style="color:#f00;" if={ opts.appearance.start.getNameRequired }>※</span></label>
					<div class="col-sm-8"><input name="visitor_name" class="form-control" value="{ customer.chat_username }" type="text" placeholder="{ opts.appearance.start.guideName === "" || opts.appearance.start.guideName ? opts.appearance.start.guideName : "名前" }">
					</div>
					<input name="name_label" value="{ opts.appearance.start.titleName || "名前" }" type="hidden">
				</div>
				<div id="name_form_group" class="form-group" if={ opts.appearance.start.getCompany }>
					<label class="col-sm-4 control-label" id="oastc702">{ opts.appearance.start.titleCompany || "会社名" }<span style="color:#f00;" if={ opts.appearance.start.getCompanyRequired }>※</span></label>
					<div class="col-sm-8"><input name="visitor_company" class="form-control" value="{ customer.chat_company_name }" type="text" placeholder="{ opts.appearance.start.guideCompany === "" || opts.appearance.start.guideCompany ? opts.appearance.start.guideCompany : "会社名" }">
					</div>
					<input name="com_label" value="{ opts.appearance.start.titleCompany || "会社名" }" type="hidden">
				</div>
				<div class="form-group" if={ opts.appearance.start.getEmail }>
					<label class="col-sm-4 control-label" id="oaste703">{ opts.appearance.start.titleEmail || "メールアドレス" }<span style="color:#f00;" if={ opts.appearance.start.getEmailRequired }>※</span></label>
					<div class="col-sm-8">
					<input name="visitor_email" value="{ customer.chat_email }" class="form-control" type="text" placeholder="{ opts.appearance.start.guideEmail === "" || opts.appearance.start.guideEmail ? opts.appearance.start.guideEmail : "メールアドレス" }">
					</div>
					<input name="mail_label" value="{ opts.appearance.start.titleEmail || "メールアドレス" }" type="hidden">
				</div>
				<div class="form-group" if={ opts.appearance.start.getTel }>
					<label class="col-sm-4 control-label" id="oastt704">{ opts.appearance.start.titleTel || "電話番号" }<span style="color:#f00;" if={ opts.appearance.start.getTelRequired }>※</span></label>
					<div class="col-sm-8">
					<input name="visitor_tel" value="{ customer.chat_tel }" class="form-control" type="text" placeholder="{ opts.appearance.start.guideTel === "" || opts.appearance.start.guideTel ? opts.appearance.start.guideTel : "電話番号" }">
					</div>
					<input name="tel_label" value="{ opts.appearance.start.titleTel || "電話番号" }" type="hidden">
				</div>
				<div class="form-group" if={ opts.appearance.start.getContact }>
					<label class="col-sm-4 control-label" id="oastc705">{ opts.appearance.start.titleContact || "お問い合わせ内容" }<span style="color:#f00;" if={ opts.appearance.start.getContactRequired }>※</span></label>
					<div class="col-sm-8">
					<textarea name="inquiry" class="form-control"></textarea><span></span>
					</div>
					<input name="content_label" value="{ opts.appearance.start.titleContact || "お問い合わせ内容" }" type="hidden">
				</div>
				<div class="form-group freeform" each={ ff,i in opts.appearance.start.freeform }>
					<label class="col-sm-4 control-label">{ ff.title }<span style="color:#f00;" if={ ff.required }>※</span></label>
					<div class="col-sm-8">
					<input name="freeform_{i}" value="{}" class="form-control" type="text" placeholder="{ ff.guide }"><span></span>
					</div>
				</div>
				<p class="box" if={ opts.appearance.start.getEmail && !(opts.appearance.start.logmail === false) }><label id="email_use"><input name="mail_note" type="checkbox" for="email_use">{ opts.appearance.start.emailQuestion || "チャット終了後に、内容をメールで送信する。" }</label></p>
				<p class="box" if={ opts.appearance.start.showRequiredCheckbox && opts.appearance.start.requiredCheckboxAbove }><label id="required-checkbox-label"><input id="required_checkbox" name="required_checkbox" type="checkbox" for="required-checkbox-label">{ opts.appearance.start.requiredCheckboxText }</label></p>

				<div class="error-message" style="color:#f00;"></div>

				<div class="form-group btn-container">
					<button id="start_btn" type="button" class="btn btn-primary btn-block" onclick="{requestChat}" style="background-image: linear-gradient(to bottom,{ opts.appearance.themeParams.button } 0, { opts.appearance.themeParams.button } 100%);border-color:{ opts.appearance.themeParams.button };background-color:{ opts.appearance.themeParams.button };">
						<span style="color:{opts.appearance.themeParams.font7 || '#ffffff'};">
							{ opts.appearance.start.buttonText || "チャットを開始する" }
						<span/>
					</button>
				</div>
				<p class="box" if={ opts.appearance.start.showRequiredCheckbox && !opts.appearance.start.requiredCheckboxAbove }><label id="required-checkbox-label"><input id="required_checkbox" name="required_checkbox" type="checkbox" for="required-checkbox-label">{ opts.appearance.start.requiredCheckboxText }</label></p>
				<div class="form-group contact-remark" if={ opts.appearance.start.remark }>
					<textarea class="form-control" readonly>{ variableTexts.startRemark }</textarea>
				</div>
				</form>

			</div><!-- body -->

			<div id="chatplusfooter">
				<span class="footer option"><a onclick={openOptionDialog} if={ opts.appearance.themeParams.option }>{ opts.appearance.themeParams.optionTitle || 'オプション'}</a></span>
				<span class="deprecated-secondary-font style-background-color footer powered"><a onclick="{powered}" style="cursor:pointer;">Powered by {opts.poweredby}</a></span>
			</div><!-- footer -->
		</div><!-- content -->
		</div><!-- outline -->

		<div id="outline" style="border-color:{ opts.appearance.themeParams.offline_border || opts.appearance.themeParams.border } !important;background-color:{ opts.appearance.themeParams.offline_border } !important;" if={ status=="no_agent" }>
		<div id="chatpluscontent">
			<div id="eye_catcher" if={eyeCatcher.active && opts.appearance.eyeCatcher.always} onclick={ open }>
				<img if={ opts.appearance.eyeCatcher.image } src="{ opts.appearance.eyeCatcher.image }">
				<img if={ !opts.appearance.eyeCatcher.image } src="https://appimg.chatplus.jp/app/s/eyecatcher/2.png">
				<a class="button-hide" onclick={hideWindow} if={windowStatus=="close"}><i class="cpfar fa-times fa-lg"></i></a>
			</div>
			<div id="chatplusheader" style=";border-color:{ opts.appearance.themeParams.offline_border || opts.appearance.themeParams.border } !important;background-color:{ opts.appearance.themeParams.offline_border } !important;">
				<div id="profile" class="profile" style="cursor:pointer" onclick={ open }>
				<span class="name">{ opts.appearance.disconnect_title || "メッセージを残す" }</span>
				</div>
				<div class="operate">
				<a class="button-expand" onclick={expand} if={compress_enabled && compressed}><i class="cpfas fa-expand-alt fa-lg"></i></a>
				<a class="button-compress" onclick={compress} if={compress_enabled && !compressed}><i class="cpfas fa-compress-alt fa-lg"></i></a>
				<a class="button-close" onclick={closeWindow} if={windowStatus!="close"}><i class="cpfar fa-minus-square fa-lg"></i></a>
				<a class="button-hide" onclick={hideWindow} if={windowStatus=="close"}><i class="cpfar fa-times fa-lg"></i></a>
				</div>
			</div>

			<div id="body" style="background-color:{ opts.appearance.themeParams.background }">
			<h2 id="cpoadb710" style="{ offDisplay ? 'margin-top:40px;' : '' }"><abr content="{ variableTexts.disconnectBody || "オペレーターは今対応できません。メッセージをお残しください。すぐにこちらからご連絡いたします。" }"></h2>
			<form id="form-offline" style="{ offDisplay ? 'display:none;' : '' }" class="form-horizontal" if={ ! opts.appearance.disconnect_no_form }>
			<div each={ e,i in disconnect }>
			<div class="form-group" if={e.type == '_name'}>
				<label class="col-sm-4 control-label" id="cpoadnt711">{e.title}<span style="color:#f00;">※</span></label>
				<div class="col-sm-8"><input class="form-control ques" data-label="{e.title}" data-required="1" data-name="name" type="text" placeholder="{e.title}" value="{ self.customer.username }"></div>
			</div>
			<virtual if={e.type == '_email'}>
			<div class="form-group">
				<label class="col-sm-4 control-label" id="cpoadet712">{e.title}<span style="color:#f00;">※</span></label>
				<div class="col-sm-8"><input class="form-control ques" data-label="{e.title}" data-required="1" data-name="email" type="text" placeholder="{e.title}" value="{ self.customer.email }"></div>
			</div>
			<div class="form-group" if={e.check}>
				<label class="col-sm-4 control-label" id="cpoadet712">{e.title}(確認)<span style="color:#f00;">※</span></label>
				<div class="col-sm-8"><input class="form-control ques emailCheck" data-label="{e.title}(確認)" data-required="1" data-name="emailCheck" type="text" placeholder="{e.title}(確認)"></div>
			</div>
			</virtual>
			<div class="form-group" if={ e.type=="text" }>
				<label class="col-sm-4 control-label">{ e.title }<span style="color:#f00;" if={ e.required=="1" }>※</span></label>
				<div class="col-sm-8"><input class="form-control ques" data-label="{ e.title }" data-required="{ e.required }" data-name="{e.title}" type="text" placeholder="{ e.title }"><span></span></div>
			</div>
			<div class="form-group" if={ e.type=="title" }>
				<label class="col-sm-4 control-label">{ e.title }<span style="color:#f00;" if={ e.required=="1" }>※</span></label>
				<div class="col-sm-8"><input class="form-control ques" data-label="{ e.title }" data-required="{ e.required }" data-name="title" type="text" placeholder="{ e.title }"><span></span></div>
			</div>
			<div class="form-group" if={ e.type=="textarea" }>
				<label class="col-sm-4 control-label">{ e.title }<span style="color:#f00;" if={ e.required=="1" }>※</span></label>
				<div class="col-sm-8">
				<textarea class="form-control ques" data-label="{ e.title }" data-required="{ e.required }" data-name="{e.title}"></textarea><span></span>
				</div>
			</div>
			<div class="form-group" if={ e.type=="select" }>
				<label class="col-sm-4 control-label">{ e.title }<span style="color:#f00;" if={ e.required=="1" }>※</span></label>
				<div class="col-sm-8">
				<select class="form-control ques selectbox" data-label="{ e.title }" data-required="{ e.required }" data-name="{e.title}">
				<option value=""></option>
				<option each={ name, i in e.items } value="{name}">{ name }</option>
				</select>
				</div>
			</div>
			<div class="form-group" if={ e.type=="radio" }>
				<label class="col-sm-4 control-label">{ e.title }<span style="color:#f00;" if={ e.required=="1" }>※</span></label>
				<div class="col-sm-8">
				<ul class="form-list">
					<li each={ name, i in e.items }><label><input type="radio" data-label="{ e.title }" data-required="{ e.required }" data-name="{e.title}" name="radio" class="ques" value="{ name }">{ name }</label></li>
				</ul>
				</div>
			</div>
			<div class="form-group" if={ e.type=="check" }>
				<label class="col-sm-4 control-label">{ e.title }<span style="color:#f00;" if={ e.required=="1" }>※</span></label>
				<div class="col-sm-8">
				<ul class="form-list">
					<li each={ name, i in e.items }><label><input type="checkbox" data-label="{ e.title }" data-required="{ e.required }" data-name="{e.title}" name="checkbox1" value="{ name }" class="ques">{ name }</label></li>
				</ul>
				</div>
			</div>
			</div>

			<div if={ opts.appearance.disconnect_remark } class="contact-remark">
			<textarea class="form-control" readonly>{ variableTexts.disconnectRemark }</textarea>
			</div>


			<div class="error-message" style="color:#f00;"></div>

			<div class="form-group btn-container">
				<button type="button" class="btn btn-primary btn-block" onclick="{contact}" style="background-image: linear-gradient(to bottom,{ opts.appearance.themeParams.button } 0, { opts.appearance.themeParams.button } 100%);border-color:{ opts.appearance.themeParams.button };background-color:{ opts.appearance.themeParams.button };" id="cpoadbt713">
					<span style="color:{opts.appearance.themeParams.font7 || '#ffffff'};">
						{ opts.appearance.disconnect_buttonText || "メッセージを残す" }
					<span/>
				</button>
			</div>
			</form>

			</div><!-- body -->

			<div id="chatplusfooter" style="border-color:{ opts.appearance.themeName !=='modern' ? opts.appearance.themeParams.offline_border ||  opts.appearance.themeParams.border : 'transparent' } !important;background-color:{ opts.appearance.themeName !=='modern' ? opts.appearance.themeParams.offline_border ||  opts.appearance.themeParams.border  : 'transparent' } !important;">
				<span class="footer option"><a onclick={openOptionDialog} if={ opts.appearance.themeParams.option }>{ opts.appearance.themeParams.optionTitle || 'オプション'}</a></span>
				<span class="deprecated-secondary-font style-background-color footer powered"><a onclick="{powered}" style="cursor:pointer;">Powered by {opts.poweredby}</a></span>
			</div><!-- footer -->
		</div><!-- content -->
		</div><!-- outline -->

		<div id="outline" style="border-color:{ opts.appearance.themeParams.border } !important;background-color: transparent !important;" if={ status == 'in_chat' || status == 'in_chatbot' || status=="greeting" || status == 'close_chat_by_visitor' || status == 'close_chat_by_agent' || status == 'close_chat_by_mute' || inChatWaiting && status == 'wait_chat' }>
		<div id="chatpluscontent">
			<div id="eye_catcher" if={eyeCatcher.active && opts.appearance.eyeCatcher.always} onclick={ open }>
				<img if={ opts.appearance.eyeCatcher.image } src="{ opts.appearance.eyeCatcher.image }">
				<img if={ !opts.appearance.eyeCatcher.image } src="https://appimg.chatplus.jp/app/s/eyecatcher/2.png">
				<a class="button-hide" onclick={hideWindow} if={windowStatus=="close" && (status == 'close_chat_by_visitor' || status == 'close_chat_by_agent' || status == 'close_chat_by_mute')}><i class="cpfar fa-times fa-lg"></i></a>
				<a class="button-hide close" onclick={removeWindow} if={windowStatus=="close" && !(status == 'close_chat_by_visitor' || status == 'close_chat_by_agent' || status == 'close_chat_by_mute')}><i class="cpfar fa-times fa-lg"></i></a>
			</div>
			<div id="chatplusheader">
				<div id="profile" class="profile" style="cursor:pointer" onclick={ open }>
				<!--img class="agent-icon" src="{url}/image/user/{ access_key }/{ agent_id }" style="max-width:24px;max-height:24px;" if={ opts.appearance.talking.agentPhoto }>
				<span class="name">{ agent_name }</span-->
				</div>
				<div class="title {frame:opts.frame_image}" onclick={ open }>{
					  status == 'close_chat_by_visitor' || status == 'close_chat_by_agent' || status == 'close_chat_by_mute' ? opts.appearance.end.title
					: status == 'wait_chat' ? (callingTitle ? callingTitle : "担当者に接続中です")
					: opts.appearance.talking.title
				}</div>
				<div class="operate">
				<a class="button-expand" onclick={expand} if={compress_enabled && compressed}><i class="cpfas fa-expand-alt fa-lg"></i></a>
				<a class="button-compress" onclick={compress} if={compress_enabled && !compressed}><i class="cpfas fa-compress-alt fa-lg"></i></a>
				<a class="button-close" onclick={closeWindow} if={windowStatus!="close"}><i class="cpfar fa-minus-square fa-lg"></i></a>
				<a class="button-remove" onclick={removeWindow} if={status == 'in_chat' || status == 'in_chatbot' || status == 'wait_chat' && inChatWaiting}><i class="cpfas fa-times fa-lg"></i></a>
				<a class="button-hide" onclick={hideWindow} if={windowStatus=="close" && (status == 'close_chat_by_visitor' || status == 'close_chat_by_agent' || status == 'close_chat_by_mute')}><i class="cpfar fa-times fa-lg"></i></a>
				</div>
			</div><!-- header -->

			<div id="body" style="position:relative;background-color:{ opts.appearance.themeParams.background }" class="{frame:opts.frame_image} {oneliner:opts.appearance.talking.oneliner && !(status=='close_chat_by_visitor'||status=='close_chat_by_agent'||status=='close_chat_by_mute')}">
				<div id="profile" class="profile" style="cursor:pointer" onclick={ open }>
					<img src="{url}/image/user/{ access_key }/{ agent_id }" style="max-width:56px;max-height:56px;" if={ opts.appearance.talking.agentPhoto }>
					<div class="name">{ agent_name }<i class="cpfas fa-mobile-alt fa-lg" style="margin-left:6px;" aria-hidden="true" if={ opts.appearance.talking.mobileIcon }></i></div>
					<div class="operator-role"><span id="cpatcn619">{ opts.appearance.talking.counterName || "カスタマーサポート" }</span></div>
					<div class="logo" if={ opts.appearance.talking.logo }><img src="{ opts.logo_image }" style="max-width:56px;max-height:56px;"></div>
				</div><!-- profile -->
				<div id="chatplusframe" class="frame" if={opts.frame_image}>
					<img class="frame-icon" src="{opts.frame_image}">
					<span class="name" if={opts.appearance.talking.explanation}>{ opts.appearance.talking.explanation }</span>
				</div>

				<div id="messages" class="iconsize{ opts.appearance.themeParams.iconsize } {imageMap:opts.appearance.talking.useImageMap}" onscroll="{scrollMessage}">
					<div class="view">
						<div id="past-mess-block" class="view-content" if={ pastMessages && (status=="in_chat" || status=="in_chatbot" || status=="suspend_chat" || status=="wait_chat" && inChatWaiting) } style="text-align:center; padding-bottom:22px;">
							<a class="past-mess-anchor" href="javascript:void(0)" onclick="{ showPastMessages }" >{opts.appearance.talking.showPastMessages_msg|| "前回の内容を表示する"}</a>
							<span class="past-mess-throbber" style="display:none; text-align:center; color:#666666;"><i class="cpfas fa-spinner fa-spin"></i></span>
						</div>
						<div class="view-content {msg:!m.date, user:m.event_from==1, ope:m.event_from==2, imageMap:m.event_type==25, textform:m.event_type==26, already:m.already, date:m.date}" id="msg_{m.id}" data-num="{i}" data-rule="{m.bot_rule}" data-past="{m.past}" each={ m in messages }>
							<div if={ m.date } style="text-align:center; color:#666666; padding:5px; width: 100%; float:left;">
								<datestampclient content={ m.created_at } format="YYYY/MM/DD" timezone="{parent.opts.timezone}" offset="{parent.opts.timezone_offset}" />
							</div>
							<div if={ m.event_type!=25  && m.date === undefined }>
								<div class="time">
									<timestampclient content="{ m.created_at }" format="HH:mm" timezone="{parent.opts.timezone}" offset="{parent.opts.timezone_offset}" />
								</div>
								<div class="name" if={ m.event_from==1 }>{ m.name || parent.opts.appearance.themeParams.visitorName }</div>
								<div class="name" if={ m.event_from==2 }>{ m.name || parent.opts.appearance.themeParams.visitorName }
									<img src="{url}/image/user/{ access_key }/{ m.agent_id }" class="icon">
								</div>
								<div if={ m.event_type==24 } class="stamp"><raw content="{ m.body }" /></div>
								<div if={ m.event_type==27 } class="confirm"><raw content="{ m.body }" /></div>
								<div if={ m.event_type==26 } class="textform"><raw content="{ m.body }" /></div>
								<div if={ m.event_type!=24 && m.event_type!=27 && m.event_type!=29 && m.event_type!=26}  class="{m.name || parent.opts.appearance.themeParams.visitorName ? 'text' : 'text no_name'}">
									<nlbr content="{ m.body }" if={ m.event_type < 30 } />
									<raw content="{ m.body }" if={ m.event_type >= 31 } />
								</div>
							</div>
							<div if={ m.event_type==25 && m.date === undefined }>
								<raw content="{ m.body }" />
							</div>
							<div if={ m.event_type==29 && m.date === undefined } class="text">
								<raw content="{ m.body }" />
							</div>
						</div>
						<div id="scroll-dummy" style="width:100%; float:left;">
						</div>
					</div>

				<div id="writing_box" style="padding:6px;display:none;clear:both;"
						if={ (!opts.appearance.talking.hasOwnProperty('showWriting') || opts.appearance.talking.showWriting) && status!='close_chat_by_visitor' && status!='close_chat_by_agent' && status!='close_chat_by_mute'}>
					<img src="https://image.chatplus.jp/app/writing.gif" style="max-width:26px;" />
				</div>

				</div><!-- messages -->

				<virtual if={status == 'close_chat_by_visitor' || status == 'close_chat_by_agent' || status == 'close_chat_by_mute'} style="display:block;">
					<p href="#" id="cpoaeat721">{ status == 'close_chat_by_mute' ? (opts.appearance.end.afterTextByMute || "一定時間新しい発言がなかったためチャットを終了しました。") : (opts.appearance.end.afterText || "チャットを終了しました。") }</p>
					<a href="#" id="cpoaert722" onclick="{ reDisplay }" if={ ! opts.appearance.end.noRestart && display_when_restart == 're_display' }>{ opts.appearance.end.restartText || "チャットを再開する" }</a>
					<a href="#" id="cpoaert723" onclick="{ restart }" if={ ! opts.appearance.end.noRestart && (display_when_restart == 're_init' || !display_when_restart) }>{ opts.appearance.end.restartText || "チャットを再開する" }</a>
				</virtual>

				<div id="file_upload_form">
					<div class="operate">
					<div class="input-file"><input type="file" class="addfile" name="addfile"></div>
					<div class="button-container"><button id="oatubt707" class="btn btn-primary btn-sm" onclick="{ uploadFile }" type="button" style="background-image: linear-gradient(to bottom,{ opts.appearance.themeParams.button } 0, { opts.appearance.themeParams.button } 100%);border-color:{ opts.appearance.themeParams.button };background-color:{ opts.appearance.themeParams.button };"><i class="cpfas fa-spinner fa-spin fa-lg fa-fw margin-bottom upload-loader" style="display:none;"></i>{ opts.appearance.talking.uploadButtonText || "アップロード" }</button>&nbsp;<a href="javascript:void(0);" onclick="{ cancelFile }" id="oatuct708">{ opts.appearance.talking.uploadCancelText || "キャンセル" }</a></div>
					<p style="margin-top:30px;text-align:center;font-size:12px;" id="oatun709">{ opts.appearance.talking.uploadNote || "※10MB以内のファイルをアップロードしてください" }</p>
					</div>
				</div>

				<div id="option_form">
					<div class="operate">
						<div class="input-file">オプション設定</div>
						<div class="options">
							<div style="text-align:center;"><label><input type="checkbox" name="mute" checked="{chatplus.option.mute}">&nbsp;通知音を出さない</label></div>
						</div>
						<div class="button-container" style="text-align:center;">
							<button class="btn btn-primary btn-sm" onclick="{ submitOption }" type="button" style="background-image: linear-gradient(to bottom,{ opts.appearance.themeParams.button } 0, { opts.appearance.themeParams.button } 100%);border-color:{ opts.appearance.themeParams.button };background-color:{ opts.appearance.themeParams.button };"><span style="color:{opts.appearance.themeParams.font7 || '#ffffff'};">適用<span/></button>
							<button class="btn btn-primary btn-sm" onclick="{ cancelOption }" type="button" style="background-image: linear-gradient(to bottom,{ opts.appearance.themeParams.button } 0, { opts.appearance.themeParams.button } 100%);border-color:{ opts.appearance.themeParams.button };background-color:{ opts.appearance.themeParams.button };"><span style="color:{opts.appearance.themeParams.font7 || '#ffffff'};">キャンセル<span/></button>
						</div>
					</div>
				</div>

				<div id="quit_confirm" if={ ! opts.appearance.end.skip }>
					<div class="operate">
						<div id="cpoaecm731" class="input-file">{ opts.appearance.end.confirmMessage || "チャットを終了しますか？" }</div>
						<div class="button-container">
							<button id="cpoaeeb732" class="btn btn-primary btn-sm" onclick="{ quit }" type="button" style="background-image: linear-gradient(to bottom,{ opts.appearance.themeParams.button } 0, { opts.appearance.themeParams.button } 100%);border-color:{ opts.appearance.themeParams.button };background-color:{ opts.appearance.themeParams.button };"><span style="color:{opts.appearance.themeParams.font7 || '#ffffff'};">{ opts.appearance.end.endButtonText || "はい" }<span/></button>&nbsp;
							<button id="cpoaecbt733" class="btn btn-primary btn-sm" onclick="{ cancelQuit }" type="button" style="background-image: linear-gradient(to bottom,{ opts.appearance.themeParams.button } 0, { opts.appearance.themeParams.button } 100%);border-color:{ opts.appearance.themeParams.button };background-color:{ opts.appearance.themeParams.button };"><span style="color:{opts.appearance.themeParams.font7 || '#ffffff'};">{ opts.appearance.end.cancelButtonText || "キャンセル" }<span/></button>
						</div>
						<div class="suppress-container" style="text-align:center; margin-top:20px;" if={opts.appearance.end.suppress && !opts.appearance.end.suppressPopup}>
							<label style="font-weight:normal;"><input type="checkbox" class="suppress" value="1" checked={opts.appearance.end.suppressDefault}>&nbsp;{opts.appearance.end.suppressText||"一定時間チャットを表示しない"}</label>
						</div>
					</div>
				</div>

				<div id="quit_question" class="question-form" if={ opts.appearance.end.useQuestion && ! opts.appearance.end.skip }>
					<h2 id="cpoaerm740"><nlbr content="{ variableTexts.endQuestionMessage || 'いかがでしたか。よろしければ今後の改善のため、評価をお願いします。' }" /></h2>
					<div style="width:80%;margin:0 auto;">
						<form id="form-quit" class="form-horizontal" if={opts.appearance.end.question}>
							<div class="form-group rate" if={opts.appearance.end.rate}>
								<label id="cpoaetr741" style="text-align:center;">{ opts.appearance.end.titleRate || "評価" }</label>
								<div id="rating_buttons" style="text-align:center;" if={! opts.appearance.end.questionRateRequired}>
									<a href="javascript:void(0);" onclick={feedbackGood} id="cpoaegr742" class="rate-good"><input type="radio" class="ques" name="quit-rate" data-name="評価" value="{ opts.appearance.end.goodRate || '良かった' }"><i class="cpfar fa-thumbs-up fa-lg" style="margin-right:3px;"></i>{ opts.appearance.end.goodRate || "良かった" }</a>　
									<a href="javascript:void(0);" onclick={feedbackBad} id="cpoaebr743" class="rate-bad"><input type="radio" class="ques" name="quit-rate" data-name="評価" value="{ opts.appearance.end.badRate || '良くなかった' }"><i class="cpfar fa-thumbs-down fa-lg" style="margin-right:3px;"></i>{ opts.appearance.end.badRate || "良くなかった" }</a>
								</div>
								<div id="rating_buttons" style="text-align:center;" if={opts.appearance.end.questionRateRequired}>
									<a href="javascript:void(0);" onclick={feedbackGood} id="cpoaegr742" class="rate-good"><input type="radio" class="ques" name="quit-rate" data-name="評価" value="{ opts.appearance.end.goodRate || '良かった' }" data-required="1"><i class="cpfar fa-thumbs-up fa-lg" style="margin-right:3px;"></i>{ opts.appearance.end.goodRate || "良かった" }</a>　
									<a href="javascript:void(0);" onclick={feedbackBad} id="cpoaebr743" class="rate-bad"><input type="radio" class="ques" name="quit-rate" data-name="評価" value="{ opts.appearance.end.badRate || '良くなかった' }" data-required="1"><i class="cpfar fa-thumbs-down fa-lg" style="margin-right:3px;"></i>{ opts.appearance.end.badRate || "良くなかった" }</a>
								</div>
							</div>
							<div each={opts.appearance.end.question}>
								<div class="form-group">
									<label class="control-label">{title}<span style="color:#f00;" if={required=="1"}>※</span></label>
									<div>
										<input if={type=="text"} class="form-control ques" data-label="{title}" data-required="{required}" data-name="{title}" type="text" placeholder="{title}">
										<textarea if={type=="textarea"} class="form-control ques" data-label="{title}" data-required="{required}" data-name="{title}"></textarea>
										<select if={type=="select"} class="form-control ques selectbox" data-label="{title}" data-required="{required}" data-name="{title}">
											<option value=""></option>
											<option each={name, i in items} value="{name}">{name}</option>
										</select>
										<ul class="form-list" if={type=="radio"}>
											<li each={name, i in items}><label><input type="radio" data-label="{title}" data-required="{required}" data-name="{title}" name="{'radio_' + title}" class="ques" value="{name}">{name}</label></li>
										</ul>
										<ul class="form-list" if={type=="check"}>
											<li each={name, i in items}><label><input type="checkbox" data-label="{title}" data-required="{required}" data-name="{title}" name="{'check_' + title}" class="ques" value="{name}">{name}</label></li>
										</ul>
									</div>
								</div>
							</div>
							<span class="error-msg" style="color:#f00;"></span>
							<div class="form-group btn-container" style="text-align:center;">
								<button type="button" class="btn btn-primary btn-block btn-sm" onclick="{feedback}" style="margin:0 auto; width:auto; background-image: linear-gradient(to bottom,{ opts.appearance.themeParams.button } 0, { opts.appearance.themeParams.button } 100%);border-color:{ opts.appearance.themeParams.button };background-color:{ opts.appearance.themeParams.button };"><span style="color:{opts.appearance.themeParams.font7 || '#ffffff'};">{opts.appearance.end.questionButtonText || 'アンケートに答える'}<span/></button>
							</div>
						</form>

						<div id="question-submitted" style="text-align:center; display: none">
							{opts.appearance.end.questionDoneMessage || 'アンケートを受け取りました。ご協力ありがとうございます。'}
							<div style="text-align:center;">
								<button id="cpoatpb744" class="btn btn-primary btn-sm" onclick="{ closeQuestion }" type="button" style="background-image: linear-gradient(to bottom,{ opts.appearance.themeParams.button } 0, { opts.appearance.themeParams.button } 100%);border-color:{ opts.appearance.themeParams.button };background-color:{ opts.appearance.themeParams.button };"><span style="color:{opts.appearance.themeParams.font7 || '#ffffff'};">{ opts.appearance.end.buttonText ||"閉じる" }<span/></button>
							</div>
						</div>
					</div>
				</div>

				<div id="quit_question" if={ opts.appearance.end.rate && ! opts.appearance.end.useQuestion && ! opts.appearance.end.skip}>
					<h2 id="cpoaerm740"><nlbr content="{ variableTexts.endRateMessage || "いかがでしたか。よろしければ今後の改善のため、評価をお願いします。" }" /></h2>
					<div style="width:80%;margin:0 auto;">
						<div class="form-group" if={ opts.appearance.end.rate }>
							<label id="cpoaetr741" style="padding-top:10px;font-size:16px;font-weight:bold;">{ opts.appearance.end.titleRate || "評価" }</label>
							<div id="rating_buttons" style="text-align:center;">
							<a onclick="{ good }" href="javascript:void(0);" id="cpoaegr742"><i class="cpfar fa-thumbs-up fa-lg" style="margin-right:3px;"></i>{ opts.appearance.end.goodRate || "良かった" }</a>　
							<a onclick="{ bad }" href="javascript:void(0);" id="cpoaebr743"><i class="cpfar fa-thumbs-down fa-lg" style="margin-right:3px;"></i>{ opts.appearance.end.badRate || "良くなかった" }</a>
							</div>
							<div id="rating_field" style="text-align:center; display: none"></div>
						</div>
						<div class="form-group" if={ opts.appearance.end.rate && opts.appearance.end.questionnaire }>
							<label style="padding-top:30px;font-size:16px;font-weight:bold;">評価の理由を詳しくお聞かせください。</label>
							<div style="padding-top:10px;text-align:center;"><button type="button" class="btn btn-primary" style="background-image: linear-gradient(to bottom,{ opts.appearance.themeParams.button } 0, { opts.appearance.themeParams.button } 100%);border-color:{ opts.appearance.themeParams.button };background-color:{ opts.appearance.themeParams.button };"><span style="color:{opts.appearance.themeParams.font7 || '#ffffff'};">アンケートに答える<span/></button></div>
						</div>

						<div style="text-align:center;">
							<button id="cpoatpb744" class="btn btn-primary btn-sm" onclick="{ closeQuestion }" type="button" style="background-image: linear-gradient(to bottom,{ opts.appearance.themeParams.button } 0, { opts.appearance.themeParams.button } 100%);border-color:{ opts.appearance.themeParams.button };background-color:{ opts.appearance.themeParams.button };"><span style="color:{opts.appearance.themeParams.font7 || '#ffffff'};">{ opts.appearance.end.buttonText ||"閉じる" }<span/></button>
						</div>
					</div>
				</div>

				<div id="quit_question" if={ ! opts.appearance.end.rate && ! opts.appearance.end.useQuestion && ! opts.appearance.end.skip }>
					<h2 id="cpoaenm740"><nlbr content="{ variableTexts.endNoRateMessage || "チャットを終了しました。ご利用ありがとうございました。" }" /></h2>
					<div style="width:80%;margin:0 auto;">
						<div style="text-align:center;">
							<button id="cpoatpb744" class="btn btn-primary btn-sm" onclick="{ closeQuestion }" type="button" style="background-image: linear-gradient(to bottom,{ opts.appearance.themeParams.button } 0, { opts.appearance.themeParams.button } 100%);border-color:{ opts.appearance.themeParams.button };background-color:{ opts.appearance.themeParams.button };"><span style="color:{opts.appearance.themeParams.font7 || '#ffffff'};">{ opts.appearance.end.buttonText ||"閉じる" }<span/></button>
						</div>
					</div>
				</div>

			</div><!-- body -->


			<div id="userOperation" style="background-color:{ opts.appearance.themeParams.border } !important;" if={ (status == 'in_chat' || status == 'in_chatbot' || status == 'wait_chat' && inChatWaiting) && opts.appearance.talking.useImageMap }>
				<div id="userOperationImage" data-rule="{opts.appearance.talking.imageMapId}" if={ (status == 'in_chat' || status == 'in_chatbot' || status == 'wait_chat' && inChatWaiting) && opts.appearance.talking.useImageMap }>
					<img usemap="#ImageMap" src="{ opts.appearance.talking.imageMapImage }" style="width:100%;" alt="{ imageMapAlt }" />
					<map name="ImageMap">
					    <area each={ a in imageMapAreas } if={ a.type=="uri" } shape="rect" coords="{ a.pos }" href="{ a.value }" target="{ a.target }" alt="" />
					    <area each={ a in imageMapAreas } if={ a.type=="message" } shape="rect" coords="{ a.pos }" data-text="{ a.value }" onclick="{ imagemapMessage }" alt="" />
					</map>
				</div>
				<section id="userOperationArea" class="{noChatText:(no_prompt || (no_bot_prompt && (status == 'in_chatbot' || status == 'wait_chat' && inChatWaiting)))}" style="background-color:{ opts.appearance.themeParams.border } !important;" if={ (status == 'in_chat' || status == 'in_chatbot' || status == 'wait_chat' && inChatWaiting) && opts.appearance.talking.useImageMap }>
					<div id="iconKeyboard" onclick="{ showKeyboard }"><i class="cpfar fa-keyboard fa-lg" aria-hidden="true" style="color:{ opts.appearance.themeName !=='modern' ? '#fff': opts.appearance.themeParams.font1 };"></i></div>
					<div id="tapMessage" onclick="{ switchImagemap }"><i class="cpfas fa-caret-down" aria-hidden="true" style="color:{ opts.appearance.themeName !=='modern' ? '#fff': opts.appearance.themeParams.font1 };"></i><p style="color:{ opts.appearance.themeName !=='modern' ? '#fff': opts.appearance.themeParams.font1 };">{ opts.appearance.talking.imageMapText }</p></div>
				</section>
			</div>


			<form id="chattext" onsubmit="{send}" class="{ cp-hide:opts.appearance.talking.useImageMap }">
				<div id="textarea" style="background-color:{ opts.appearance.themeName !=='modern' ? opts.appearance.themeParams.border : '#FFF' } !important;" if={ !(no_prompt || (no_bot_prompt && (status == 'in_chatbot' || status == 'wait_chat' && inChatWaiting))) && !compressed } ondrop="{dropToUpload}" ondragover="{dropPrevent}" ondragenter="{dropPrevent}">
					<div id="operate" class="{with-clip:opts.appearance.talking.uploadByVisitor}" if={! opts.appearance.talking.oneliner || opts.appearance.themeName == 'mini'}>
						<div class="swtimg" if={ opts.appearance.talking.useImageMap } onclick="{showImagemap}"><i class="cpfas fa-list-ul"></i></div>
						<div class="phone" if={ opts.appearance.talking.phoneNumber && opts.appearance.themeName!="mini" }>
							<a if={ mobileFlag } href="tel:{ opts.appearance.talking.phoneNumber }" target="_parent">
								<i class="cpfas fa-phone" title="{ opts.appearance.talking.phoneNumber }" alt="{ opts.appearance.talking.phoneNumber }"></i>
								<span class="number">{ opts.appearance.talking.phoneNumber }</span>
							</a>
							<span if={ !mobileFlag }>
								<i class="cpfas fa-phone" title="{ opts.appearance.talking.phoneNumber }" alt="{ opts.appearance.talking.phoneNumber }"></i>
								<span class="number">{ opts.appearance.talking.phoneNumber }</span>
							</span>
						</div>
						<i if={ opts.appearance.talking.uploadByVisitor } class="cpfas fa-paperclip fa-lg" onclick="{selectFile}"></i>
						<button class="btn btn-primary btn-sm" type="submit" type="button" style="background-image: linear-gradient(to bottom,{ opts.appearance.themeParams.button } 0, { opts.appearance.themeParams.button } 100%);border-color:{ opts.appearance.themeParams.button };background-color:{ opts.appearance.themeParams.button };display:none;" id="oabtt706">
							<span style="color:{opts.appearance.themeParams.font7  || '#ffffff'};">
								{ opts.appearance.talking.buttonText || "送信" }
							<span/>
						</button>
					</div>
					<span id="message-wrapper" class="message-wrapper {has-operate:opts.appearance.talking.oneliner}">
						<span id="textarea-wrapper" class="textarea-bg style-border-color">
							<textarea name="message"  if={!mobileFlag} class="textarea-bg textarea-font" id="message_pc" placeholder="{ opts.appearance.talking.prompt || 'ここにメッセージを入力してください' }" maxlength="3000" onkeyup="{ writing }"></textarea>
							<textarea name="message" if={ mobileFlag} class="textarea-bg textarea-font" id="message_mobile" placeholder="{ opts.appearance.talking.prompt_phone || 'ここにメッセージを入力してください' }" maxlength="3000" onkeyup="{ writing }"></textarea>
							<div id="operate" class="{with-clip:opts.appearance.talking.uploadByVisitor}" if={opts.appearance.talking.oneliner && opts.appearance.themeName != 'mini'}>
								<i if={ opts.appearance.talking.useImageMap } class="swtimg cpfas fa-list-ul" onclick="{showImagemap}"></i>
								<i if={ opts.appearance.talking.uploadByVisitor } class="cpfas fa-paperclip" onclick="{selectFile}"></i>
								<button class="btn btn-primary btn-sm" type="submit" type="button" style="background-image: linear-gradient(to bottom,{ opts.appearance.themeParams.button } 0, { opts.appearance.themeParams.button } 100%);border-color:{ opts.appearance.themeParams.button };background-color:{ opts.appearance.themeParams.button };display:none;" id="oabtt706">
									<span style="text-align:center; color:{opts.appearance.themeParams.font7 || '#ffffff'};">{ opts.appearance.talking.buttonText || "送信" }</span>
								</button>
							</div>
						</span>
					</span>
				</div>
				<div id="textarea" style="text-align:center;" if={ !(no_prompt || (no_bot_prompt && (status == 'in_chatbot' || status == 'wait_chat' && inChatWaiting))) && compress_enabled && compressed } onclick={ expand }>
					<img style="cursor:pointer; width:100%; height:32px; vertical-align:bottom;" src="https://appimg.chatplus.jp/app/s/textarea/mock-textarea.gif">
				</div>
			</form>

			<div id="chatplusfooter" if={! compressed}>
				<span class="footer option"><a onclick={openOptionDialog} if={ opts.appearance.themeParams.option }>{ opts.appearance.themeParams.optionTitle || 'オプション'}</a></span>
				<span class="deprecated-secondary-font style-background-color footer powered"><a onclick="{powered}" style="cursor:pointer;">Powered by {opts.poweredby}</a></span>
			</div>
			<div id="chatplusfooter" if={compressed}>
				<span class="deprecated-secondary-font style-background-color footer powered"><a onclick="{powered}" style="cursor:pointer;">Powered by {opts.poweredby}</a></span>
			</div><!-- footer -->
		</div><!-- content -->
		</div><!-- outline -->

		<!--<div id="outline" style="border-color:{ opts.appearance.themeParams.border } !important;background-color:transparent;" if={ status == 'wait_chat' }>-->
		<div id="outline" style="border-color:{ opts.appearance.themeParams.border } !important;background-color: transparent !important;" if={ status == 'wait_chat' && ( !waitDisable || chatbuttonFlag ) && !inChatWaiting }>
		<div id="chatpluscontent">
			<div id="eye_catcher" if={eyeCatcher.active && opts.appearance.eyeCatcher.always} onclick={ open }>
				<img if={ opts.appearance.eyeCatcher.image } src="{ opts.appearance.eyeCatcher.image }">
				<img if={ !opts.appearance.eyeCatcher.image } src="https://appimg.chatplus.jp/app/s/eyecatcher/2.png">
			</div>
			<div id="chatplusheader">
				<div class="profile" style="cursor:pointer" onclick={ open }>
				<span class="name">{ callingTitle === "" || callingTitle ? callingTitle : "担当者に接続中です" }</span>
				</div>
				<div class="operate">
				<a class="button-expand" onclick={expand} if={compress_enabled && compressed}><i class="cpfas fa-expand-alt fa-lg"></i></a>
				<a class="button-compress" onclick={compress} if={compress_enabled && !compressed}><i class="cpfas fa-compress-alt fa-lg"></i></a>
				<a class="button-close" onclick={closeWindow} if={windowStatus!="close"}><i class="cpfar fa-minus-square fa-lg"></i></a>
				<a class="button-remove" onclick={removeWindow}><i class="cpfas fa-times fa-lg"></i></a>
				</div>
			</div><!-- header -->

			<div id="body" style="background-color:{ opts.appearance.themeParams.background }">
				<div></div>
				<h2>
				<p id="calling-explanation"></p>
				</h2>

				<div id="quit_confirm">
					<div class="operate">
						<div id="cpoaecm731" class="input-file">{ opts.appearance.end.confirmMessage || "チャットを終了しますか？" }</div>
						<div class="button-container">
							<button id="cpoaeeb732" class="btn btn-primary btn-sm" onclick="{ quit }" type="button" style="background-image: linear-gradient(to bottom,{ opts.appearance.themeParams.button } 0, { opts.appearance.themeParams.button } 100%);border-color:{ opts.appearance.themeParams.button };background-color:{ opts.appearance.themeParams.button };">
								<span style="color:{opts.appearance.themeParams.font7 || '#ffffff'};">
									{ opts.appearance.end.endButtonText || "はい" }
								<span/>
							</button>
							<button id="cpoaecbt733" class="btn btn-primary btn-sm" onclick="{ cancelQuit }" type="button" style="background-image: linear-gradient(to bottom,{ opts.appearance.themeParams.button } 0, { opts.appearance.themeParams.button } 100%);border-color:{ opts.appearance.themeParams.button };background-color:{ opts.appearance.themeParams.button };">
								<span style="color:{opts.appearance.themeParams.font7 || '#ffffff'};">
									{ opts.appearance.end.cancelButtonText || "キャンセル" }
								<span/>
							</button>
						</div>
						<div class="suppress-container" style="text-align:center; margin-top:20px;" if={opts.appearance.end.suppress && !opts.appearance.end.suppressPopup}>
							<label style="font-weight:normal;"><input type="checkbox" class="suppress" value="1" checked={opts.appearance.end.suppressDefault}>&nbsp;{opts.appearance.end.suppressText||"一定時間チャットを表示しない"}</label>
						</div>
					</div>
				</div>
			</div><!-- body -->

			<div id="chatplusfooter" if={! compressed}>
				<span class="footer option"><a onclick={openOptionDialog} if={ opts.appearance.themeParams.option }>{ opts.appearance.themeParams.optionTitle || 'オプション'}</a></span>
				<span class="deprecated-secondary-font style-background-color footer powered"><a onclick="{powered}" style="cursor:pointer;">Powered by {opts.poweredby}</a></span>
			</div>
			<div id="chatplusfooter" if={compressed}>
				<span class="deprecated-secondary-font style-background-color footer powered"><a onclick="{powered}" style="cursor:pointer;">Powered by {opts.poweredby}</a></span>
			</div><!-- footer -->
		</div><!-- content -->
		</div><!-- outline -->

		<button id="openChat" onclick={open} style="display:none;"></button>
		<button id="closeChat" onclick={closeWindow} style="display:none;"></button>
	</div><!-- chatplusview -->

	<script>
		var self = this;
		this.agent_id = null;
		this.agent_name = null;
		this.messages = [];
		this.status = '';
		this.windowStatus = 'close';
		this.explanation = '';
		this.rwdImageMapUsed = false;
		this.callingTitle = opts.appearance.calling.title;
		this.uploading = false;
		this.chatbuttonFlag = false;
		this.popupFlag = window.name === 'chat_plus_jp_window';
		this.mobileFlag = false;
		this.url = __cp_d;
		this.display_when_restart = '';
		this.contact_form_height = "";
		this.waitDisable = opts.appearance.calling.disable;
		this.compress_enabled = (0 < opts.appearance.themeParams.spHeight && opts.appearance.themeParams.spHeight < 100);
		this.compressed = void(0);
		this.no_prompt = false;
		this.no_bot_prompt = false;
		this.messagePreID = -999;
		this.customer = {};
		this.imageMapAreaHeight;
		this.forcedMessaging = false;
		this.headless = opts.appearance.themeParams.hasOwnProperty('titleBar') && !opts.appearance.themeParams.titleBar;
		this.pastMessages = opts.appearance.talking.showPastMessages || (opts.rewind && opts.rewind.enabled);
		this.inChatWaiting = false;
		this.timer ;
		this.refreshtime = 100;
		this.inquiry = "";
		this.mail_note_flg ;
		this.offDisplay = false;
		this.disconnect = (jQueryPlus.isArray(opts.appearance.disconnect) ? opts.appearance.disconnect : (JSON.parse(opts.appearance.disconnect) || []))
			.map(function(e, i) {e.order = parseInt(e.order) || 3 + i; return e;})
			.concat({'type': '_name',  'order': opts.appearance.disconnect_nameOrder  || 1, 'title': opts.appearance.disconnect_nameTitle  || '名前'})
			.concat({'type': '_email', 'order': opts.appearance.disconnect_emailOrder || 2, 'title': opts.appearance.disconnect_emailTitle || 'メールアドレス', 'check': opts.appearance.disconnect_emailCheck})
			.sort(function(a, b) {return a.order - b.order;});

		var _ua = (function(u){
		  return {
		    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)
		      || u.indexOf("ipad") != -1
		      || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
		      || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
		      || u.indexOf("kindle") != -1
		      || u.indexOf("silk") != -1
		      || u.indexOf("playbook") != -1,
		    Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
		      || u.indexOf("iphone") != -1
		      || u.indexOf("ipod") != -1
		      || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
		      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
		      || u.indexOf("blackberry") != -1,
		    Android:(u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
		      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1),
		    IOS:(u.indexOf("iphone") != -1
                      || u.indexOf("ipod") != -1
                      || u.indexOf("ipad") != -1)
		  }
		})(window.navigator.userAgent.toLowerCase());

		var leaveFlg = (window.localStorage)?window.localStorage.getItem("leavePage"):getCookie("leavePage");
		var lead_flg = (window.localStorage)?window.localStorage.getItem('lead_on_leavepage'):getCookie("lead_on_leavepage");
		if((lead_flg && lead_flg !== "null") || leaveFlg ){
			jQueryPlus(function() {
				jQueryPlus(window).mousemove(function(evt){
					if (self.timer)
						clearTimeout(self.timer);
					self.timer = setTimeout(function(){
						if(evt.clientY < 50){
							self.refreshtime = 100;
							chatClient.trigger('chatBeforeunload', {});
						}else if(evt.clientY <= 250){
							self.refreshtime = 0;
						}else if(evt.clientY > 250){
							self.refreshtime = 100;
						}
					},self.refreshtime);
				});
			});
		}
		
				
		var isLandscape = function() {
			if (!(_ua.Mobile || _ua.Tablet)) {return false;}

			if (window.orientation) {
				return Math.abs(window.orientation) === 90;
			} else if (window.screen && window.screen.orientation) {
				return window.screen.orientation.angle % 180 !== 0;
			} else {
				return false; // not supported
			}
		}

		//imageMap
		var screenW = 0;
		if (_ua.Mobile || _ua.Tablet) {
			screenW = isLandscape() ? jQueryPlus(window).height() : jQueryPlus(window).width();
		} else {
			// screenW = jQueryPlus('#chatplusview #outline').innerWidth();
			screenW = {'basic': 388, 'app': 408, 'mini': 298, 'modern': 420}[opts.appearance.themeName];
		}

		this.imageMapParams = opts.appearance.talking.imageMapParams;
		if (this.imageMapParams) {
			try {
				var params = this.imageMapParams;//JSON.parse(this.imageMapParams);PHP側で処理
				this.imageMapAlt = params.altText? params.altText : "";
				this.imageMapAreas = [];

				var w =	screenW;
				var h = Math.round(screenW/opts.appearance.talking.imageMapImagew*opts.appearance.talking.imageMapImageh);

				//40はoperationのエリア
				var self = this;
				self.imageMapAreaHeight = h;

				var w_per = w/params.baseSize.width;
				var h_per = h/params.baseSize.height;
				//width
				chatplus._.each(params.actions, function(action){
					var value = "";
					var target = "";
					var type = action["type"];
					if (action["type"]=="uri") {
						value = action["linkUri"];
					if(!action['sameTab']) target = "_blank";
					else target = "";
					}else if (action["type"]=="message") {
						value = action["text"];
					}
					var pos = [
						  Math.round(action["area"]["x"]*w_per)
						, Math.round(action["area"]["y"]*h_per)
						, Math.round(action["area"]["width"]*w_per)+Math.round(action["area"]["x"]*w_per)
						, Math.round(action["area"]["height"]*h_per)+Math.round(action["area"]["y"]*h_per)
					];

					self.imageMapAreas.push({
						pos:pos.join(","),
						value:value,
						type:type,
						target:target
					});
				});
			}catch(e){
				opts.appearance.talking.useImageMap = false;
			}
		} else {
			opts.appearance.talking.useImageMap = false;
		}

		this.chatbuttonFlag = chatplus._.some(window.location.search.split(/[?&]/), function(e) {return e === 't=btn';});

		this.mobileFlag = (_ua.Mobile || _ua.Tablet)? true : false;
		if (! this.mobileFlag) {this.compress_enabled = false;}

		this.eyeCatcher = this.mobileFlag ? {
			'enable': opts.appearance.eyeCatcher.enable_sp,
			'active': opts.appearance.eyeCatcher.enable && (opts.appearance.eyeCatcher.behavior_sp !== 'sudden' && opts.appearance.eyeCatcher.behavior_sp !== 'scroll-in'),
			'behavior': opts.appearance.eyeCatcher.behavior_sp,
			'param': opts.appearance.eyeCatcher.param_sp,
		} : {
			'enable': opts.appearance.eyeCatcher.enable,
			'active': opts.appearance.eyeCatcher.enable && (opts.appearance.eyeCatcher.behavior !== 'sudden' && opts.appearance.eyeCatcher.behavior !== 'scroll-in'),
			'behavior': opts.appearance.eyeCatcher.behavior,
			'param': opts.appearance.eyeCatcher.param,
		};

		if (self.eyeCatcher.enable) {
			switch (self.eyeCatcher.behavior) {
				case 'hidden':
				case 'sudden': {
					window.setTimeout(function() {
						self.eyeCatcher.active = (self.eyeCatcher.behavior === 'sudden');
						self.update();
					}, parseInt(self.eyeCatcher.param, 10) * 1000);
					break;
				}
				case 'scroll-in':
				case 'scroll-out': {
					var f = chatplus._.throttle(function() {
						if ((jQueryPlus(document).scrollTop() + window.innerHeight / 2) > jQueryPlus(document).height() / 100.0 * parseInt(self.eyeCatcher.param, 10)) {
							self.eyeCatcher.active = self.eyeCatcher.behavior === 'scroll-in';
							self.update();
							jQueryPlus(document).off('scroll', f);
						}
					}, 500);
					jQueryPlus(document).on('scroll', f);
					break;
				}
			}
		}

		jQueryPlus(function() {
			if( !(_ua.Mobile || _ua.Tablet) && opts.appearance.talking.submitKey != 'none' )  {
				jQueryPlus(document).on("keypress", "#chatplusview #message_pc", function(e) {
					if (e.keyCode == 13 || e.keyCode == 10) { // [Enter]
						switch (opts.appearance.talking.submitKey) {
							case 'shift': {if (! e.shiftKey ||   e.ctrlKey ||   e.altKey) {return;} break;}
							case 'ctrl' : {if (  e.shiftKey || ! e.ctrlKey ||   e.altKey) {return;} break;}
							case 'alt'  : {if (  e.shiftKey ||   e.ctrlKey || ! e.altKey) {return;} break;}
							default     : {if (  e.shiftKey ||   e.ctrlKey ||   e.altKey) {return;}}
						}
						e.preventDefault();
						sendMessage( document.getElementById("message_pc") );
					}
				});
			}
			jQueryPlus(document).on("focus", "input[type=text], textarea", function(e) {
				if (self.windowStatus == 'open' && _ua.Android) {
					// jQueryPlus("#chatplusview").css("cssText","top:0px !important;left:0px !important");
					jQueryPlus(this).on('blur', function() {
						jQueryPlus("#chatplusview").css("cssText","");
					});
				}
			});
			if (self.popupFlag) {
				jQueryPlus(document).on("click", "#chatplusview .msg a", function(e) {
					if (e.target.href) {
						e.preventDefault();

						var href = e.target.href;
						var target = jQueryPlus(this).attr('target') || '_blank';
						window.open(href, '_blank');
					}
				});
			}
		    jQueryPlus(document).on("click", "#chatplusview ul.chat-ques input[type=radio]", function(e) {
				var url = jQueryPlus(this).data('url');
				var id = chatplus._.last(e.target.id.split('_'));
				if (id == 'nothertab-url' || id == 'sametab-url') {
					var nvalue = url.replace(/<a.+?>/g,'').replace(/<\/a>/g,'');
					var target = id == 'nothertab-url' ? '_blank' : '_self';
					if (self.popupFlag) {
                        target = "_blank";
					}
                    //window.open(nvalue, target);
                    var index = jQueryPlus(e.target).closest(".chat-ques").find("li").index( jQueryPlus(e.target).closest("li") )+1;
                    chatClient.trigger('gotoURL', {
                        url:nvalue
                        , target:target
                        , rule_id:jQueryPlus(e.target).closest(".view-content").data("rule")
                        , num:index
                        , nomessage:jQueryPlus(this).data('nomessage')
                    });
				}
				if (opts.startup && opts.startup.lockChoices) {
					jQueryPlus( e.target ).closest(".chat-ques").find("input").prop("disabled", true);
					// jQueryPlus( e.target ).prop("disabled", false);
				}
				if (e.target.labels && e.target.labels.length) {
					var label = e.target.labels[0].innerHTML;
					var event_trigger = new RegExp(/<span class="event-trigger">.*<\/span>/).exec(label);
					event_trigger = event_trigger ? event_trigger[0] : null;
					if (event_trigger) {
						events = event_trigger.substr(event_trigger.indexOf("#!!") + 3)
						events = events.substr(0, events.indexOf("<"));
						if (events)
							chatClient.trigger('sendEvent', {events:events});
					}
				}

				var event_name = jQueryPlus(e.target).attr('data-event');
				if (event_name) {
					chatClient.trigger('sendEvent', {events: event_name});
				}

				if(jQueryPlus(this).data("type")=="rule") {
					execRule( e.target.value );
				}else if (! jQueryPlus(this).data('nomessage')) {
					sendForcedMessage( e.target );
				}
			});
			jQueryPlus(document).on("click", "#chatplusview ul.chat-ques a", function(e) {
				var event_trigger = new RegExp(/<span class="event-trigger">.*<\/span>/).exec(e.target.innerHTML);
				event_trigger = event_trigger ? event_trigger[0] : null;
				if (event_trigger) {
					events = event_trigger.substr(event_trigger.indexOf("#!!") + 3)
					events = events.substr(0, events.indexOf("<"));
					if (events)
						chatClient.trigger('sendEvent', {events:events});
				}
			});
            jQueryPlus(document).on("click", "#chatplusview .confirm .confirm_link a", function(e) {

                var index = jQueryPlus(e.target).closest(".confirm_link").find("a").index( jQueryPlus(e.target).closest("a") )+1;
                var rule_id = jQueryPlus(e.target).closest(".view-content").data("rule");
                //リンクの場合もボットログを記録
                if( jQueryPlus(this).attr("href") ) {
                    chatClient.trigger('gotoURL', {
                        'url': jQueryPlus(this).attr("href"),
                        'target': "_target",
                        'rule_id':rule_id,
                        'num':index,
                        'nomessage':1
                    });
                    return false;
                }

                var type = jQueryPlus(this).attr('data-type');
                var value = jQueryPlus(e.target).attr('data-value');
                switch (type) {
                    case 'rule': {
                        execRule(value);
                        break;
                    }
                    case 'ctext': {
                        sendForcedMessage({'value': value, 'rule_id':rule_id, 'rule_num':index});
                        break;
                    }
                    case 'status': {
                        chatClient.trigger('changeStatus', {'status': value, 'rule_id':rule_id, 'num':index});
                        break;
                    }
                    case 'assign': {
                        if (/^id_/.test(value)) {
                            var text = value.replace(/^id_/, '');
                            chatClient.trigger('changeAgent', {
                                'mode': "id",
                                'target': text,
                                'status': 'in_chat',
                                'rule_id':rule_id,
                                'num':index
                            });
                        }

                        if (/^tag_/.test(value)) {
                            var text = value.replace(/^tag_/, '');
                            chatClient.trigger('changeAgent', {
                                'mode': "tag",
                                'target': text,
                                'status': 'in_chat',
                                'rule_id':rule_id,
                                'num':index
                            });
                        }
                        break;
                    }
                }
            });
		    jQueryPlus(document).on("click", "#chatplusview .imagemapMessage", function(e) {
				var text = jQueryPlus( e.target ).data("text").toString();
				if( !text ) return;

				//連打防止
                if (self.forcedMessaging) return;
                self.forcedMessaging = true;
                setTimeout(function(){ self.forcedMessaging = false; }, 250);

                var index = jQueryPlus(e.target).closest("map").find("area").index( jQueryPlus(e.target) )+1;
                var rule_id = jQueryPlus(e.target).closest(".view-content").data("rule");
                sendForcedMessage( {value:text, rule_id:rule_id, rule_num:index} );
		    });
		    //IOS対応
            jQueryPlus(document).on("touchstart", "#chatplusview .imagemapMessage", function(e) {

                if(!_ua.IOS) return;

                var text = jQueryPlus( e.target ).data("text").toString();
                if( !text ) return;

                //連打防止
                if (self.forcedMessaging) return;
                self.forcedMessaging = true;
                setTimeout(function(){ self.forcedMessaging = false; }, 250);

                var index = jQueryPlus(e.target).closest("map").find("area").index( jQueryPlus(e.target) )+1;
                var rule_id = jQueryPlus(e.target).closest(".view-content").data("rule");
                sendForcedMessage( {value:text, rule_id:rule_id, rule_num:index} );
            });
			jQueryPlus(document).on("keydown", "#chatplusview .textform input, #chatplusview .textform select", function(ev) {
				if (ev.keyCode === 13) {
					ev.preventDefault();
					var form = jQueryPlus(this).parents('form');
					if (form.attr('data-enter')) {
						jQueryPlus(this).blur();
						form.find('.submit button').click();
					}
				}
			});
			jQueryPlus(document).on("click", "#chatplusview .textform .submit button", function(e) {
				var form = jQueryPlus(this).closest('.textform').find('form');
				if (form && form.attr('data-action')) {
					// 新textform
					form.removeClass('failed');
					form.find('.error-list').empty();

					var action_ = form.attr('data-action').split('_');
					var action_type = action_.shift(), action_value = action_.join('_');
					var chatinfo = form.attr('data-chatinfo') ? true : false;
					var writeattr = form.attr('data-writeattr') ? true : false;

					var data = {};
					var rack = {};
					form.find('input[type="text"], input[type="email"], input[type="date"], input[type="time"], input[type="file"], textarea, select').each(function() {
						var name = jQueryPlus(this).attr('name');
						var val = jQueryPlus(this).val();
						data[name] = val;
						var required = jQueryPlus(this).prop('required');
						var valid = jQueryPlus(this).is(':valid');
						if (required && ! val) {rack[name] = true;}
						else if (! valid) {rack[name] = jQueryPlus(this).attr('data-error') || true;}
					});
					form.find('.form-group.checkbox, .form-group.radio').each(function() {
						var name = jQueryPlus(this).find('input').attr('name');
						var list = jQueryPlus(this).find('input:checked').map(function() {return jQueryPlus(this).val();}).toArray();
						data[name] = list;
						var required = jQueryPlus(this).find('input').prop('required');
						if (required && list.length == 0) {rack[name] = true;}
					});

					if (! chatplus._.isEmpty(rack)) {
						form.addClass('failed');
						for (var name in rack) {
							if (chatplus._.isString(rack[name])) {
								form.find('.error-list').append('<p>'+rack[name]+'</p>');
							}
						}
						return;
					}

					// returns Array<String>
					var first_val = function(query) {
						if (! query) {query = 'input[type="text"], input[type="email"], input[type="date"], input[type="time"] textarea, select, .form-group.checkbox, .form-group.radio';}

						var first_elem = form.find(query).first();

						if (first_elem.hasClass('form-group')) {
							// radio, checkbox
							return first_elem.find('input:checked').map(function() {return jQueryPlus(this).val();}).toArray();
						} else if (first_elem.length > 0) {
							// input[text], textarea, select
							return [first_elem.val()];
						} else {
							window.console.error('textform', first_elem);
							return [];
						}
					};

                    //ボット操作ログを保存する
                    if(action_type!="message") {
                        chatClient.trigger("eventlog", {rule_id:jQueryPlus(e.target).closest(".view-content").data("rule")});
                    }

					switch (action_type) {
						// 訪問者への属性付与
						case 'attr': {
							addVisitorAttribute(data, true);
							break;
						}
						// 訪問者へのタグ付与
						case 'tag': {
							addVisitorTag(first_val());
							break;
						}
						// 指定URLへのPOST
						case 'postback': {
							postback(action_value, data, null, chatinfo);
							break;
						}
						// json形式でのメッセージ発言
						case 'json': {
							postback(action_value, data, 'json', chatinfo);
							break;
						}
						// メッセージ送信
						case 'message': {
							var message = form.find('input[type="text"], input[type="email"], input[type="date"], input[type="time"], textarea, select, .form-group.checkbox, .form-group.radio')
								.filter(function() {
									return jQueryPlus(this).data('hidden') === undefined;
								})
								.map(function() {
									var name = jQueryPlus(this).hasClass('form-group')
										? jQueryPlus(this).find('input').data('label')
										:	jQueryPlus(this).data('label');
									var value = jQueryPlus(this).hasClass('form-group')
										? jQueryPlus(this).find('input:checked').map(function() {return jQueryPlus(this).val();}).toArray().join(',')
										: jQueryPlus(this).val();
									return name+':'+value;
								})
								.toArray().join('\n');
							sendForcedMessage({'value': message, 'no_assign': true, rule_id:jQueryPlus(e.target).closest(".view-content").data("rule")});

							form.find('input[type="file"]').each(function() {
								var name = jQueryPlus(this).data('label');
								var element = jQueryPlus(this);

								chatClient.trigger('uploadFile', {'target': element});
							});

							break;
						}
						// チケット作成,メール送信
						case 'ticket':
						case 'mail': {
							// 「訪問者の属性を更新する」が有効なら訪問者属性更新
							if (writeattr) {
								addVisitorAttribute(data, true);
							}

							var subject = data['__subject'] || form.attr('data-subject') || null;
							var visitor_name = data['name'] || data['chatName'] || data['perhapsName'] || '';
							var email = data['email'] || data['chatEmail'] || data['perhapsEmail'] || '';
							var message = form.find('input[type="text"], input[type="email"], input[type="date"], input[type="time"], textarea, select, .form-group.checkbox, .form-group.radio')
								.filter(function() {
									return jQueryPlus(this).data('hidden') === undefined;
								})
								.map(function() {
									var name;
									var value;
									if (jQueryPlus(this).hasClass('form-group')) {
										name = jQueryPlus(this).find('input').attr('name');
										value = jQueryPlus(this).find('input:checked').map(function() {return jQueryPlus(this).val();}).toArray().join(',');
									} else {
										name = jQueryPlus(this).attr('name');
										value = jQueryPlus(this).val();
									}
									return '【'+name+'】'+value;
								})
								.toArray().join('\n');
							var nomail = form.attr('data-nomail') ? 1 : 0;
							var events = null;

							if (form.attr('data-log')) {
								events = chatplus._.map(self.messages, function(e) {
									return {'name': e.name, 'event_from': e.event_from, 'event_type': e.event_type, 'body': e.body, 'created_at': e.created_at};
								});
							}

							var deferred = new jQueryPlus.Deferred();

							deferred.promise().then(function(attach) {
								if (attach) {
									if (attach instanceof Array) {
										attach = attach.map(decodeURIComponent);
									} else {
										attach = decodeURIComponent(attach);
									}
								}

								if (action_type === 'ticket') {
									chatClient.trigger('createTicket', {
										'subject': subject,
										'name': visitor_name,
										'email': email,
										'body': message,
										'nomail': nomail,
										'attach': attach,
										'events': events,
									});
								} else {
									chatClient.trigger('formMail', {
										'subject': subject,
										'name': visitor_name,
										'email': email,
										'body': message,
										'nomail' : nomail,
										'attach': attach,
										'events': events,
									});
								}
							});

							if (form.find('input[type="file"]').length === 0) {
								deferred.resolve(null);
							} else {
								var input_with_file = form.find('input[type="file"]').filter(function(i, e) {return e.files.length > 0;});
								if (input_with_file.length === 0) {
									deferred.resolve(null);
								} else {
									chatClient.trigger('uploadFormFile', {
										'target': jQueryPlus(input_with_file),
										'callback': function(res) {
											deferred.resolve(res.url);
										},
									});
								}
							}

							break;
						}
					}

					if (form.attr('data-after')) {
						var after_ = form.attr('data-after').split('_');
						var after_mode = after_[0];
						var after_value = after_.splice(1).join('_');
						switch (after_mode) {
							case 'message': {
								sendForcedMessage({'value': after_value, 'no_assign': true});
								break;
							}
							case 'rule': {
								execRule(parseInt(after_value));
								break;
							}
						}
					}

					chatClient.trigger('sendGaEvents', {'actions': ['textform']});

					form.find('input, textarea').attr({'readonly': true});
					form.find('input[type="radio"]:not(:checked), input[type="checkbox"]:not(:checked), select option:not(:selected)').attr({'disabled': true});
					form.find('.submit button').attr({'disabled': true});
				} else {
					// 旧textform
					var text = jQueryPlus(this).closest('.textform').find('.input').val();
					if (!text) {return;}

					text = chatClient.parseVariables(text);

					//send message
                    sendForcedMessage( {value:text, rule_id:jQueryPlus(e.target).closest(".view-content").data("rule")} );
					//event
					try {
						var actions = jQueryPlus(this).data("action").split("_");
						if (actions[0] == "attr") {
							var obj = {};
							obj[ actions[1] ] = text;
							addVisitorAttribute( obj );
						}else if (actions[0] == "tag") {
							addVisitorTag( text );
						}else if (actions[0] == "postback") {
							postback(actions[1], text, null, true);
						}
					} catch(e) {}
				}
			});

			jQueryPlus(window).on('orientationchange', function() {
				if ( opts.appearance.talking.useImageMap && (_ua.Mobile || _ua.Tablet)) {
					if (isLandscape()) {
						//横向きの場合、イメージマップを表示しない
						jQueryPlus("#chatplusview #chattext").removeClass('cp-hide');
						jQueryPlus("#chatplusview .swtimg").hide();
						jQueryPlus("#chatplusview #userOperationImage").hide();
						jQueryPlus("#chatplusview #userOperationArea").hide();
					} else {
						jQueryPlus("#chatplusview .swtimg").show();
						//テキストエリアを表示しない場合は、imagemapを畳んだ状態で表示する
						if (self.no_prompt || (self.no_bot_prompt && (self.status == 'in_chatbot' || self.status == 'wait_chat' && inChatWaiting))) {
							jQueryPlus("#chatplusview #userOperationArea").css("display", "flex");
							jQueryPlus("#chatplusview #tapMessage .fa").addClass('fa-caret-up').removeClass('fa-caret-down');
						}
					}
				}
				setTimeout(function() {
					fitChat();
					jQueryPlus('#chatplusview #messages').animate({scrollTop: 1000000}, 'fast');
				}, 500);
			});

			if (self.mobileFlag) {
				jQueryPlus(window).on('resize', function() {
					setTimeout(fitChat, 200);
				});
			}

;(function(a){a.fn.rwdImageMaps=function(){var c=this;var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var e=this,d=a(e);a("<img />").on('load',function(){var g="width",m="height",n=d.attr(g),j=d.attr(m);if(!n||!j){var o=new Image();o.src=d.attr("src");if(!n){n=o.width}if(!j){j=o.height}}var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";a('map[name="'+i+'"]').find("area").each(function(){var r=a(this);if(!r.data(l)){r.data(l,r.attr(l))}var q=r.data(l).split(","),p=new Array(q.length);for(var h=0;h<p.length;++h){if(h%2===0){p[h]=parseInt(((q[h]/n)*100)*f)}else{p[h]=parseInt(((q[h]/j)*100)*k)}}r.attr(l,p.toString())})}).attr("src",d.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(jQueryPlus);
			jQueryPlus('#chatplusview .msg img[usemap]').rwdImageMaps();
			self.rwdImageMapUsed = true;

			if (opts.appearance.themeParams.closeOnUnload) {
				jQueryPlus(window).on('beforeunload', function() {
					chatClient.trigger('quitChat', {'on': 'unload', 'isIE': isIE});
				});
			}
		});

		// ファイルドロップ処理
		dropPrevent(e) {
			e.preventDefault();
			return false;
		}
		dropToUpload(e) {
			e.preventDefault();
			if (opts.appearance.talking.uploadByVisitor) {
				var files = e.dataTransfer.files;
				chatClient.trigger('dropFile', files);
			}
			return false;
		}

		var chatClient = opts.chatClient;
		if (! chatClient) {
			chatClient = new chatplus.VisitorClient();
		}

		// チャットボタンならチャットウィンドウを開く
		if (this.chatbuttonFlag) {
			chatClient.on('initialized', function() {
				if (opts.appearance.start.disable && window.chatplusData['status'] === 'no_chat') {
					// 開始フォーム非表示なら,チャットの準備が完了した段階でチャットを即座に開始する
					chatClient.trigger('requestChat', {
						pre_survey: {visitor_name: null, visitor_company: null, visitor_email: null, visitor_tel: null, inquiry: null, mail_note_flg: false}
					});
				} else {
					// チャットウィンドウを開いた状態で開始する
					self.windowStatus = 'open';
					self.update();
				}
			});
		}
		chatClient.on('invalidVisitor', function(data){
			self.status = 'invalid_visitor';
			self.update();

			chatResize ();
		});

		chatClient.on('noChat', function(data){
			if (opts.appearance.start.disable && (!self.windowStatus || self.windowStatus == "open")) {
				// self.closeWindow();
			}

			if (self.status=="no_chat") {
				return;
			}

			self.status = 'no_chat';
			self.customer = data.customer;
			self.explanation = '';
			self.messages = [];
			if (self.display_when_restart && opts.appearance.start.displayWhenRestart) {
				chatClient.trigger('requestChat', {
					pre_survey: {visitor_name: self.customer.name, visitor_company: self.customer.company_name, visitor_email: self.customer.email, visitor_tel: self.customer.tel, inquiry: self.inquiry, mail_note_flg: self.mail_note_flg}
				});
				jQueryPlus('#chatplusview #start_btn').click();
			}

			setTimeout(function() {
				self.update();
				chatResize();
			}, 200);
		});

		chatClient.on('noAgent', function(data){

			if (!('change_status' in data) && (self.status == 'in_chat' || self.status == 'in_chatbot')) {
				return;
			}

			if (self.status !== 'no_agent') {
				chatClient.trigger('sendGaEvents', {actions: 'noAgent'});
			}

			self.status = 'no_agent';
			self.customer = data.customer;
			self.explanation = '';
			self.update();

			chatResize ();
		});

		chatClient.on('waitChat', function(data, start) {
			if (!data.force &&
					(self.status == 'close_chat_by_agent' || self.status == 'close_chat_by_visitor' || self.status == 'in_chat' || self.status == 'in_chatbot' || self.status == 'no_agent')) {
				return;
			}

			if (data.force || self.windowStatus == "open") {
				self.waitDisable = false;
			}

			if (data.inChatWaiting) {
				self.inChatWaiting = true;

				if (! start && /[?&]cpwin=/.test(location.search)) {
					var statusParam = /[?&]cpwin=([^?&]*)/.exec(location.search)[1];
					if (/open|close/.test(statusParam)) {self.windowStatus = statusParam;}
					else {self.windowStatus = parseInt(statusParam) ? 'open' : 'close';}
				} else {
					if (start || ! opts.appearance.themeParams.discardWindowStatus) {
						try {
							var storagedStatus = localStorage ? localStorage.getItem("windowStatus") : getCookie("windowStatus");
							self.windowStatus = storagedStatus == 'close' ? 'close' : 'open';
						} catch(e){
						}
					}
				}
			}

			if (self.status !== 'wait_chat' && !data.disable) {
				chatClient.trigger('sendGaEvents', {actions: 'waitChat'});
			}

			//if (self.status == 'no_chat' || self.status == 'wait_chat') {
			self.status = 'wait_chat';
			var explanation;
			if (data.congestion) {
				self.callingTitle = opts.appearance.calling.limitTitle;
				explanation = opts.appearance.calling.limitExplanation;
			} else if (data.select) {
				self.callingTitle = opts.appearance.calling.selectTitle;
				explanation = opts.appearance.calling.selectExplanation;
			} else {
				self.callingTitle = opts.appearance.calling.title;
				explanation = opts.appearance.calling.explanation;
			}

			if (explanation) {
				explanation = explanation.replace(/%number%/g, data.number || 0);
				explanation = explanation.replace(/%min%/g, data.min || 0);
				explanation = chatClient.parseVariables(explanation);

				// URL文字列をリンクに,改行を<br>に
				//  <abr>を使いたかったが,上手く表示されなかった
				explanation = explanation
					.replace(/[&'`"<>]/g, function(match) {
						return {'&': '&amp;', "'": '&#x27;', '`': '&#x60;', '"': '&quot;', '<': '&lt;', '>': '&gt;'}[match];
					})
					.replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$&" target="_blank">$&</a>')
					.replace(/\r\n?|\n/g, '<br>');

				self.explanation = explanation;

				// html文字列として解釈させる
				//if (jQueryPlus('#chatplusview #calling-explanation').html() !== self.explanation) {
				//	jQueryPlus('#chatplusview #calling-explanation').html(self.explanation);
				//}
			}
			self.update();


			//}
		});

		this.on('updated', function() {
			if (self.status == 'wait_chat') {
				if (jQueryPlus('#chatplusview #calling-explanation').html() !== self.explanation) {
					jQueryPlus('#chatplusview #calling-explanation').html(self.explanation);
				}
			}
		});

		chatClient.on('postGreeting', function(data){
			if (self.windowStatus=="open" && ! self.chatbuttonFlag) {
				// チャットウィンドウ(開始フォーム)を開いているなら自動話しかけを受け付けない
				//  ボタン形式の場合は開始フォームでも受け付ける
				return;
			}

			self.status = data.status === 'in_chatbot' ? 'in_chatbot' : 'in_chat';
			self.windowStatus = 'open';
			self.agent_id = data.agent.id;
			self.agent_name = data.agent.chat_username;
			self.explanation = '';
			self.update();

			if (data.chat) {
				var currentChatId = null;
				var messages = [];

				for (var i = 0; i< data.chat.length; i ++) {
					var message = data.chat[i];

					if (currentChatId != message.chat_id) {
						messages = [];
						currentChatId = message.chat_id;
					}
					message.body = message.body.replace(/[{}]/g, function(c) {return {'{':'&#x0007b;','}':'&#x0007d;'}[c];});
					messages.push(message);
				}

				self.messages = messages;
				self.update();

				// 最新メッセージ上部までスクロールする
				jQueryPlus('#chatplusview #messages').stop();
				scrollIntoMessage(messages[0].id);
			}

			chatResize ();
		});

		chatClient.on('inChat', function(data, start) {
			var beforeStatus = self.status;
			self.status = data.status === 'in_chatbot' ? 'in_chatbot' : 'in_chat';
			if (beforeStatus !== '' && beforeStatus !== self.status) {
				if (self.status === 'in_chat') {
					chatClient.trigger('sendGaEvents', {actions: ['inChat', 'inChatFirst']});
				} else if (self.status === 'in_chatbot') {
					chatClient.trigger('sendGaEvents', {actions: ['inChatbot', 'inChatbotFirst']});
				}
			}

			if (! self.chatbuttonFlag) {
				if (! start && /[?&]cpwin=/.test(location.search)) {
					var statusParam = /[?&]cpwin=([^?&]*)/.exec(location.search)[1];
					if (/open|close/.test(statusParam)) {self.windowStatus = statusParam;}
					else {self.windowStatus = parseInt(statusParam) ? 'open' : 'close';}
				} else {
					if (start || ! opts.appearance.themeParams.discardWindowStatus) {
						try {
							var storagedStatus = localStorage ? localStorage.getItem("windowStatus") : getCookie("windowStatus");
							self.windowStatus = storagedStatus == 'close' ? 'close' : 'open';
						} catch(e){
						}
					}
				}
			}

			self.customer = data.customer;
			self.agent_id = data.agent.id;
			self.agent_name = data.agent.chat_username;
			self.explanation = '';
			self.pastMessages = (opts.appearance.talking.showPastMessages && data.past_message_first > 0) || (opts.rewind && opts.rewind.enabled);
			self.update();

			if (beforeStatus === 'in_chatbot' && self.status === 'in_chat' && self.no_bot_prompt) {
				var top = 1000000;
				if (jQueryPlus('#chatplusview #messages .msg').length > 0) {top = jQueryPlus('#chatplusview #messages .msg:last')[0].offsetTop - jQueryPlus('#chatplusview #messages')[0].offsetTop;}
				jQueryPlus('#chatplusview #messages').animate({'scrollTop': top}, 'fast');
			}

			chatResize ();
			replaceForIE();
		});

		chatClient.on('closeChatByVisitor', function(data){
			if (self.status == 'close_chat_by_visitor')
				return;

			chatClient.trigger('sendGaEvents', {actions: "closeChat"});

			self.status = 'close_chat_by_visitor';
			self.explanation = '';
			self.display_when_restart = data.display_when_restart;
			self.update();

			try {
				if (localStorage) {
					localStorage.removeItem('windowStatus');
					localStorage.removeItem('leavePage');
					localStorage.removeItem('lead_on_leavepage');
					localStorage.removeItem('hiddenType');
				} else {
					removeCookie("windowStatus");
					removeCookie("leavePage");
					removeCookie("lead_on_leavepage");
					removeCookie("hiddenType");
				}
			}catch(e) {}

			chatResize ();
		});

		chatClient.on('closeChatByAgent', function(data){
			if (self.status == 'close_chat_by_agent')
				return;

			chatClient.trigger('sendGaEvents', {actions: "closeChat"});

			self.status = 'close_chat_by_agent';
			self.explanation = '';
			self.display_when_restart = data.display_when_restart;
			self.update();
			jQueryPlus("#chatplusview #quit_confirm").hide();
			updateConfirmWindowSize();
			jQueryPlus("#chatplusview #quit_question").show();
			if(opts.appearance.end.noeyecatcher)
				jQueryPlus("#chatplusview #eye_catcher").css('display','none');
			
			if(opts.appearance.end.close)
				self.closeWindow();
			

			try {
				if (localStorage) {
					localStorage.removeItem('windowStatus');
					localStorage.removeItem('leavePage');
					localStorage.removeItem('lead_on_leavepage');
					localStorage.removeItem('hiddenType');
				} else {
					removeCookie("windowStatus");
					removeCookie("leavePage");
					removeCookie("lead_on_leavepage");
					removeCookie("hiddenType");
				}
			}catch(e) {}

			chatResize ();
		});

		chatClient.on('closeChatByMute', function(data){
			if (self.status == 'close_chat_by_mute')
				return;

			chatClient.trigger('sendGaEvents', {actions: "closeChat"});

			self.status = 'close_chat_by_mute';
			self.explanation = '';
			self.display_when_restart = data.display_when_restart;
			self.update();

			try {
				if (localStorage) {
					localStorage.removeItem('windowStatus');
					localStorage.removeItem('leavePage');
					localStorage.removeItem('lead_on_leavepage');
					localStorage.removeItem('hiddenType');
				} else {
					removeCookie("windowStatus");
					removeCookie("leavePage");
					removeCookie("lead_on_leavepage");
					removeCookie("hiddenType");
				}
			}catch(e) {}

			chatResize ();
		});

		chatClient.on('receiveMessage', function(data, no_scroll) {
			/*
			if (data.chat) {
				self.agent_id = data.chat.agent_id;
				self.agent_name = data.chat.agent_name;
			}
			delete data.chat;
			*/
			data.body = data.body.replace(/[{}]/g, function(c) {return {'{':'&#x0007b;','}':'&#x0007d;'}[c];});

			var event_trigger = new RegExp(/<span class="event-trigger">.*<\/span>/).exec(data.body);
			if (data.body == event_trigger) {
				return;
			}

		    var message_length = self.messages.length;
			if (data.event_from == 1 && data.id != self.messagePreID) {
				var flag = false;
				for (var i = 0; i < message_length; i++) {
					if (self.messages[i].id == self.messagePreID) {
						data.already = true;
						self.messages[i] = data;
						flag = true;
						break;
					}
				}
				if (!flag) {
					self.messages.push(data);
				}
			} else {
				self.messages.push(data);
			}

			self.explanation = '';
			self.update();

			if (! no_scroll) {
				jQueryPlus('#chatplusview #messages').stop();
				if (data['event_from'] == 2) {
					// 担当者からのメッセージなら そのメッセージの上部までスクロールする
					setTimeout(scrollIntoMessage, 1, data.id);
				} else {
					// 訪問者からのメッセージなら 一番下までスクロールする
					jQueryPlus('#chatplusview #messages').animate({'scrollTop': 2000000}, 'fast');
				}
			}

			// イメージマップのクリッカブルエリアを調整
			if (jQueryPlus.fn.rwdImageMaps && ! self.rwdImageMapUsed) {
				jQueryPlus('#chatplusview .msg img[usemap]').rwdImageMaps();
				self.rwdImageMapUsed=true;
			}
		});

		chatClient.on('initMessage', function(){
			self.messages = [];
			self.update();
		});
		
		chatClient.on('Startforce',function(){
			if(opts.appearance.eyeCatcher.skip)
				self.open();
		});

		chatClient.on('listMessages', function(data){
			if (data.data) {
				var currentChatId = null;
				var messages = [];

				for (var i = 0; i< data.data.length; i ++) {
					var message = data.data[i];

					if (currentChatId != message.chat_id) {
						messages = [];
						currentChatId = message.chat_id;
					}
					message.body = message.body.replace(/[{}]/g, function(c) {return {'{':'&#x0007b;','}':'&#x0007d;'}[c];});
					messages.push(message);
				}

				self.messages = messages;
				self.update();
				// 一番下までスクロールする
				jQueryPlus('#chatplusview #messages').animate({scrollTop: 2000000}, 'fast');

				// イメージマップのクリッカブルエリアを調整
				if (jQueryPlus.fn.rwdImageMaps && ! self.rwdImageMapUsed) {
					jQueryPlus('#chatplusview .msg img[usemap]').rwdImageMaps();
					self.rwdImageMapUsed=true;
				}
			}
		});

		chatClient.on('uploadComplete', function(data){
			self.uploading = false;
			jQueryPlus("#chatplusview #file_upload_form").find(".addfile").val("");
			jQueryPlus("#chatplusview #file_upload_form").find(".upload-loader").hide();
			jQueryPlus("#chatplusview #file_upload_form").hide();
		});

		chatClient.on('quickStart', function(){
			if (opts.appearance.start.disable) {
				self.windowStatus = 'open';
				self.update();
				chatResize();
				fitChat();
				jQueryPlus('#chatplusview #messages').animate({scrollTop: 2000000}, 'fast');
			}
		});

		//CHATBOT用ACTION(開始ここから)
		chatClient.on('jumpPage', function(data){
			if(data.same_tab == 'true'){
				parent.location.href=data.URL;
			} else {
				window.open(data.URL,'_blank');
			}
		});
		//CHATBOT用ACTION(終了ここまで)

		chatClient.on('updatePrompt', function(data) {
			self.no_prompt = data.no_prompt;
			self.no_bot_prompt = data.no_bot_prompt;
		});
		
		chatClient.on('messageOffForm',function(data){
			opts.appearance.disconnect_no_form = false;
			//jQueryPlus("#chatplusview #body h2").html("");
			if (data.result=="success") {
					jQueryPlus("#chatplusview #body h2").html(data.message.success);
					self.offDisplay = true;
					self.update();
			}else {
					jQueryPlus("#chatplusview #body h2").html(data.message.error);
					self.offDisplay = true;
					self.update();
			}
		});

		send(e) {
			if(_ua.Mobile || _ua.Tablet)
				sendMessage(this.message_mobile);
			else
				sendMessage(this.message_pc);
		};

		contact(e) {
			var message = "";
			var data = {
				'title': '',
				'name': '',
				'email': '',
				'emailCheck': null,
			};
			var label = {
				'name': opts.appearance.disconnect_nameTitle || '名前',
				'email': opts.appearance.disconnect_emailTitle || 'メールアドレス',
			};
			var errorMessage = "";
			var selectTypes = {};

			jQueryPlus("#chatplusview #form-offline .ques").each(function(){
				if (jQueryPlus(this).attr("type")=="checkbox" || jQueryPlus(this).attr("type")=="radio" || jQueryPlus(this).attr("class")=="form-control ques selectbox") {
					selectTypes[jQueryPlus(this).data("name")] = {
						  "required":jQueryPlus(this).data("required")
						, "label":jQueryPlus(this).data("label")
						, "values":[]
					};
				}
			});
			jQueryPlus("#chatplusview #form-offline .ques").each(function(){
				if (jQueryPlus(this).data("name")=="title") {
					data.title = jQueryPlus(this).val();
				} else if (jQueryPlus(this).data("name")=="email") {
					data.email = jQueryPlus(this).val();
					if (jQueryPlus(this).data('label')) {label.email = jQueryPlus(this).data('label');}

					message += "【"+label.email+"】"+data.email+"\n\r";
				} else if(jQueryPlus(this).data("name")=="emailCheck") {
					data.emailCheck = jQueryPlus(this).val();
				} else if (jQueryPlus(this).data("name") == "name") {
					data.name = jQueryPlus(this).val();
					if (jQueryPlus(this).data('label')) {label.name = jQueryPlus(this).data('label');}

					message += "【"+label.name+"】"+data.name+"\n\r";
				} else if (jQueryPlus(this).attr("type")=="checkbox" || jQueryPlus(this).attr("type")=="radio") {
					if ( jQueryPlus(this).prop("checked") ) {
						selectTypes[ jQueryPlus(this).data("name") ]["values"].push( jQueryPlus(this).val() );
					}
				} else if (jQueryPlus(this).attr("class")=="form-control ques selectbox") {
					if ( jQueryPlus(this).val() ) {
						selectTypes[ jQueryPlus(this).data("name") ]["values"].push( jQueryPlus(this).val() );
					}
				} else {
					message += "【"+jQueryPlus(this).data("label")+"】"+jQueryPlus(this).val()+"\n\r";
				}

				if (jQueryPlus(this).data("required") && (jQueryPlus(this).attr("type")=="text" || jQueryPlus(this).prop("tagName") == "TEXTAREA") && !jQueryPlus(this).val() ) {
					if (opts.appearance.disconnect_errorText) {
						errorMessage += opts.appearance.disconnect_errorText.replace(new RegExp("%title%", "g"), jQueryPlus(this).data("label")) + "<br>";
					} else {
						errorMessage += jQueryPlus(this).data("label")+"を入力してください<br>";
					}
				}
			});

			if (data.email) {
				//確認オプションがあるときに2つのinputを確認する
				if (opts.appearance.disconnect_emailCheck && data.email !== data.emailCheck) {
					errorMessage += label.email+"が一致しません<br>";
				}
				//メールアドレスが正しく入力されているかのチェック
				if (! /.+@.+\..+/.test(data.email)) {
					data.email = null;
					// errorMessage += label.email+"を正しく入力してください<br>";
				}
			}

			for( var prop in selectTypes ) {
				if( selectTypes[prop]["values"].length ) {
					message += "【"+prop+"】"+selectTypes[prop]["values"].join(",")+"\n\r";
				} else if( selectTypes[prop]["required"]=="1" ) {
					if (opts.appearance.disconnect_errorText) {
						errorMessage += opts.appearance.disconnect_errorText.replace(new RegExp("%title%", "g"), selectTypes[prop]["label"]) + "<br>";
					} else {
						errorMessage += selectTypes[prop]["label"]+"を入力してください<br>";
					}
				}
			}

			if (errorMessage) {
				jQueryPlus("#chatplusview .error-message").html( errorMessage );
				return;
			} else {
				chatClient.trigger('createTicket', {
					'subject': data.title,
					'name': data.name,
					'email': data.email,
					'nomail': data.email ? 0 : 1,
					'body': message,
					'mess_error': opts.appearance.contact_failMess,
					'mess_success': opts.appearance.contact_sucesMess,
				});

				chatClient.trigger('sendGaEvents', {'actions': ['contact']});
			}
		}

		feedback(e) {
			var required = [];
			var result = {};

			jQueryPlus('#chatplusview #form-quit .ques').each(function(i, e) {
				var $e = jQueryPlus(e);
				if ($e.attr('data-required') == '1') {
					required.push($e.attr('data-name'));
				}
				switch ($e.prop('type')) {
					case 'radio':
					case 'checkbox': {
						if (! chatplus._.isArray(result[$e.attr('data-name')])) {result[$e.attr('data-name')] = [];}
						if ($e.prop('checked')) {result[$e.attr('data-name')].push($e.val());}
						break;
					}
					default: {
						result[$e.attr('data-name')] = $e.val();
					}
				}
			});

			required = chatplus._.uniq(required);

			var valid = true;
			var error_message = '';
			chatplus._.each(required, function(e) {
				if (result[e].length === 0) {
					valid = false;
					error_message += e+'を入力してください\n';
				}
			});
			jQueryPlus('#chatplusview #form-quit .error-msg').text(error_message);

			if (valid) {
				if (opts.appearance.end.rate) {
					var rate = 0;
					if (jQueryPlus('#chatplusview #form-quit .rate-good .ques').prop('checked')) {rate = 1;}
					if (jQueryPlus('#chatplusview #form-quit .rate-bad .ques').prop('checked')) {rate = 2;}
					chatClient.trigger('feedback', {'value': result, 'rate': rate, 'emptyCheck':opts.appearance.end.questionEmpty});
				} else {
					chatClient.trigger('feedback', {'value': result, 'emptyCheck':opts.appearance.end.questionEmpty});
				}

				jQueryPlus('#chatplusview #form-quit').hide();
				jQueryPlus('#chatplusview #quit_question h2').hide();
				jQueryPlus('#chatplusview #question-submitted').show();
			}
		}
		feedbackGood(e) {
			jQueryPlus('#chatplusview #form-quit .rate-good .ques').prop({'checked': true});
			jQueryPlus('#chatplusview #form-quit .rate-good').addClass('active');
			jQueryPlus('#chatplusview #form-quit .rate-bad').removeClass('active');
		}
		feedbackBad(e) {
			jQueryPlus('#chatplusview #form-quit .rate-bad .ques').prop({'checked': true});
			jQueryPlus('#chatplusview #form-quit .rate-bad').addClass('active');
			jQueryPlus('#chatplusview #form-quit .rate-good').removeClass('active');
		}

		selectFile(e) {
			updateConfirmWindowSize();
			jQueryPlus("#chatplusview #file_upload_form").show();
		}

		cancelFile(e) {
			if( self.uploading)
				return;

			jQueryPlus("#chatplusview #file_upload_form").find(".upload-loader").hide();
			jQueryPlus("#chatplusview #file_upload_form").hide();
		}

		uploadFile(e) {

			if( self.uploading)
				return;

			if ( !jQueryPlus("#chatplusview #file_upload_form").find(".addfile").val() )
				return;

			self.uploading = true;
			jQueryPlus("#chatplusview #file_upload_form").find(".upload-loader").show();
			chatClient.trigger('uploadFile', {
				target:jQueryPlus("#chatplusview #file_upload_form").find(".addfile")
			});
		}

		openOptionDialog(e) {
			updateConfirmWindowSize();
			jQueryPlus('#chatplusview #option_form').show();
		}

		submitOption(e) {
			jQueryPlus('#chatplusview #option_form').hide();

			var options = {};
			jQueryPlus('#chatplusview #option_form .options input').each(function(i, e) {
				options[jQueryPlus(e).attr('name')] = jQueryPlus(e).prop('checked');
			});
			jQueryPlus('#chatplusview #option_form .options select').each(function(i, e) {
				options[jQueryPlus(e).attr('name')] = jQueryPlus(e).find('option:selected').val();
			});

			chatClient.trigger('submitOption', options);
		}

		cancelOption(e) {
			jQueryPlus('#chatplusview #option_form').hide();
		}


		requestChat(e) {
			//validate
			var form = {
				'name_label':    jQueryPlus.trim(jQueryPlus('#chatplusview #form-start input[name="name_label"]').val()),
				'com_label':    jQueryPlus.trim(jQueryPlus('#chatplusview #form-start input[name="com_label"]').val()),
				'mail_label':    jQueryPlus.trim(jQueryPlus('#chatplusview #form-start input[name="mail_label"]').val()),
				'tel_label':    jQueryPlus.trim(jQueryPlus('#chatplusview #form-start input[name="tel_label"]').val()),
				'content_label':    jQueryPlus.trim(jQueryPlus('#chatplusview #form-start input[name="content_label"]').val()),
				'visitor_name':    jQueryPlus.trim(jQueryPlus('#chatplusview #form-start input[name="visitor_name"]').val()),
				'visitor_company': jQueryPlus.trim(jQueryPlus('#chatplusview #form-start input[name="visitor_company"]').val()),
				'visitor_email':   jQueryPlus.trim(jQueryPlus('#chatplusview #form-start input[name="visitor_email"]').val()),
				'visitor_tel':     jQueryPlus.trim(jQueryPlus('#chatplusview #form-start input[name="visitor_tel"]').val()),
				'inquiry':         jQueryPlus.trim(jQueryPlus('#chatplusview #form-start textarea[name="inquiry"]').val()),
				'mail_note_flg':   jQueryPlus('#chatplusview #form-start input[name="mail_note"]').prop('checked'),
				'check':           jQueryPlus('#chatplusview #form-start input[name="required_checkbox"]').prop('checked'),
			};

			var errorMessage = "";
			if (! form.visitor_name && opts.appearance.start.getNameRequired) {
				errorMessage += (opts.appearance.start.errorName ? opts.appearance.start.errorName : "名前を入力してください") + "<br>";
			}
			if (! form.visitor_company && opts.appearance.start.getCompanyRequired) {
				errorMessage += (opts.appearance.start.errorCompany ? opts.appearance.start.errorCompany : "会社名を入力してください") + "<br>";
			}
			if (! form.visitor_email && opts.appearance.start.getEmailRequired) {
				errorMessage += (opts.appearance.start.errorEmail1 ? opts.appearance.start.errorEmail1 : "メールアドレスを入力してください") + "<br>";
			} else if (opts.appearance.start.getEmail && form.visitor_email && ! /^.+@.+\..+$/.test(form.visitor_email)) {
				errorMessage += (opts.appearance.start.errorEmail2 ? opts.appearance.start.errorEmail2 : "メールアドレスを正しく入力してください") + "<br>";
			}
			if (! form.visitor_tel && opts.appearance.start.getTelRequired) {
				errorMessage += (opts.appearance.start.errorTel ? opts.appearance.start.errorTel : "電話番号を入力してください") + "<br>";
			}
			if (! form.inquiry && opts.appearance.start.getContactRequired) {
				errorMessage += (opts.appearance.start.errorContact ? opts.appearance.start.errorContact : "お問い合わせ内容を入力してください") + "<br>";
			}
			if (! form.check && opts.appearance.start.showRequiredCheckbox) {
				errorMessage += (opts.appearance.start.requiredCheckboxError ? opts.appearance.start.requiredCheckboxError : "") + "<br>";
			}
			var freeform = {};
			var riot_global = this;
			jQueryPlus('#chatplusview #form-start .freeform').each(function(i) {
				var name = jQueryPlus(this).find('div input').attr('name');
				var value = jQueryPlus.trim(riot_global[name].value);
				var title = opts.appearance.start.freeform[i].title;

				if (! value && opts.appearance.start.freeform[i].required) {
					errorMessage += title + 'を入力してください' + '<br>';
				} else {
					freeform[title] = value;
				}
			});

			jQueryPlus("#chatplusview .error-message").html(errorMessage);
			if (errorMessage) {return;}

			var pre_survey = {
				'name_label': form.name_label,
				'com_label': form.com_label,
				'mail_label': form.mail_label,
				'tel_label': form.tel_label,
				'content_label': form.content_label,
				'visitor_name': form.visitor_name,
				'visitor_company': form.visitor_company,
				'visitor_email': form.visitor_email,
				'visitor_tel': form.visitor_tel,
				'inquiry': form.inquiry,
				'freeform': JSON.stringify(freeform),
				'mail_note_flg': form.mail_note_flg,
			};
			self.inquiry = form.inquiry;
			self.mail_note_flg = form.mail_note_flg;

			chatClient.trigger('requestChat', {
				pre_survey: pre_survey
			});
			if (window.chatplus && window.chatplus.send_pardot_form) {
				window.chatplus.send_pardot_form({
					'serial': chatplusData.customer.serial_number,
					'name': form.visitor_name,
					'companyName': form.visitor_company,
					'email': form.visitor_email,
					'tel': form.visitor_tel,
					'inquiry': form.inquiry,
				});
			}

			//self.chat_username = this.visitor_name.value;
			setTimeout(updateMessageArea, 500);
		}

		writing(e) {

			if ( __writeIntervalID )
				return;

			__writeIntervalID = window.setInterval(function(p){

				clearInterval(__writeIntervalID);
				__writeIntervalID = null;
				chatClient.trigger('writing', {
					  text:p.target.value
					, messages:p.messages
				});
			}, 2000, {target:e.target, messages:self.messages});
		}

		closeQuestion(e) {
			jQueryPlus("#chatplusview #quit_question").hide();
			self.closeWindow();
		}

		quit(e) {
			self.parseVariableTexts();
			if(_ua.Mobile || _ua.Tablet)
				jQueryPlus("#chatplusview #message_mobile").val("");
			else
				jQueryPlus("#chatplusview #message_pc").val("");
			if (self.status == 'close_chat_by_agent' || self.status == 'close_chat_by_visitor' || self.status == 'close_chat_by_mute') {
				jQueryPlus("#chatplusview").remove();
				if(opts.appearance.end.noeyecatcher)
					jQueryPlus("#chatplusview #eye_catcher").css('display','none');
			} else {
				chatClient.trigger('quitChat', {});
				if(opts.appearance.end.noeyecatcher)
					jQueryPlus("#chatplusview #eye_catcher").css('display','none');
				if (opts.appearance.end.suppress) {
					if (opts.appearance.end.suppressPopup) {
						if (confirm("一定時間チャットを表示しないように設定しますか")) {
							chatClient.trigger('suppress');
						}
					} else {
						if (jQueryPlus('#chatplusview #quit_confirm .suppress').prop('checked')) {
							chatClient.trigger('suppress');
						}
					}
				}

				//jQueryPlus("#chatplusheader .title").text(opts.appearance.end.title);
				jQueryPlus("#chatplusview #quit_confirm").hide();
				updateConfirmWindowSize();

				if (opts.appearance.end.close) {
					self.closeWindow();
				}
				jQueryPlus("#chatplusview #quit_question").show();
				setTimeout(function() {updateConfirmWindowSize();}, 200);
			}
		}

		restart(e) {
			self.messages = [];
			chatClient.trigger('reinit', {
			});

			jQueryPlus('#chatplusview #quit_question').hide();
			jQueryPlus('#chatplusview #question-submitted').hide();

			// reset
			jQueryPlus('#chatplusview #rating_buttons').show();
			jQueryPlus('#chatplusview #rating_field').hide();
			jQueryPlus('#chatplusview #form-quit').show();
			jQueryPlus('#chatplusview #form-quit input:checked').prop({'checked': false});
			jQueryPlus('#chatplusview #form-quit input[type=text],#chatplusview #form-quit textarea').val('');
			jQueryPlus('#chatplusview #form-quit #rating_buttons a.active').removeClass('active');
			jQueryPlus('#chatplusview #quit_question h2').show();
		}

		reDisplay(e) {
			self.messages = [];
			var pre_survey = {
				visitor_name: chatplusData.customer.chat_username,
				visitor_company: chatplusData.customer.chat_company_name,
				visitor_email: chatplusData.customer.chat_email,
				visitor_tel: chatplusData.customer.chat_tel,
				inquiry: self.inquiry,
				mail_note_flg: self.mail_note_flg,
			};

			//chatClient.trigger('requestChat', {
			//	pre_survey: pre_survey,
			//	reinit: true
			//});
			chatClient.trigger('reinit', {
				pre_survey: pre_survey,
				reDisplay: true
			});

			jQueryPlus('#chatplusview #quit_question').hide();
			jQueryPlus('#chatplusview #question-submitted').hide();

			// reset
			jQueryPlus('#chatplusview #rating_buttons').show();
			jQueryPlus('#chatplusview #rating_field').hide();
			jQueryPlus('#chatplusview #form-quit').show();
			jQueryPlus('#chatplusview #form-quit input:checked').prop({'checked': false});
			jQueryPlus('#chatplusview #form-quit input[type=text],#chatplusview #form-quit textarea').val('');
			jQueryPlus('#chatplusview #form-quit #rating_buttons a.active').removeClass('active');
			jQueryPlus('#chatplusview #quit_question h2').show();
		}

		open(e) {
			self.windowStatus = 'open';
			self.waitDisable = false;

			if (this.status == "no_chat" && opts.appearance.start.disable) {
				var pre_survey = {
					visitor_name: null,
					visitor_company: null,
					visitor_email: null,
					visitor_tel: null,
					inquiry: null,
					mail_note_flg: false
				}
				self.windowStatus = 'close';
				chatClient.trigger('requestChat', {
					pre_survey: pre_survey
				});
				return;
			}else if (this.status == "no_chat" && !opts.appearance.start.disable) {
				//開始画面が表示されるので、greetingがあれば、greetingを停止させる
				chatClient.trigger('openPreSurvey', {});
			}

			if (self.status === 'in_chat' || self.status === 'in_chatbot' || self.status === 'suspend_chat' || self.status === 'wait_chat') {
				try {
					if (localStorage) {localStorage.setItem("windowStatus", "open");} else {setCookie("windowStatus", "open");}
				}catch(e) {}
			}
			// チャット開始情報が設定済の場合は自動開始する
			/*
			if (self.visitor_email.value) {
				if (self.visitor_email.value != '{ opts.customer.email }') {
					jQueryPlus('#start_btn').click();
				}
			}
			*/
			if (self.compressed) {
				jQueryPlus('#chatplusview').css('height', opts.appearance.themeParams.spHeight + '%');
			}

			self.update();
			chatResize();

			// 一番下までスクロールする
			jQueryPlus('#chatplusview #messages').animate({scrollTop: 2000000}, 'fast');
		}

		close(e) {
			self.status = 'close_chat';
			self.update();
			chatResize();
		}

		compress(e) {
			if (self.windowStatus === 'close') {return;}

			self.compressed = true;
			jQueryPlus('#chatplusview').css('height', opts.appearance.themeParams.spHeight + '%');

			self.update();
			if (! jQueryPlus('#chatplusview').hasClass('float')) {
				chatResize();
			} else {
				jQueryPlus('#chatplusview').on('oTransitionEnd mozTransitionEnd webkitTransitionEnd transitionend', chatResize);
			}
		}
		expand(e) {
			if (self.windowStatus === 'close') {return;}

			self.compressed = false;
			jQueryPlus('#chatplusview').css('height', '');

			self.update();
			if (! jQueryPlus('#chatplusview').hasClass('float')) {
				chatResize();
			} else {
				jQueryPlus('#chatplusview').on('oTransitionEnd mozTransitionEnd webkitTransitionEnd transitionend', chatResize);
			}
		}

		closeWindow(e) {
			self.windowStatus = 'close';

			if (self.compressed) {
				jQueryPlus('#chatplusview').css('height', '');
			}

			if (self.status === 'in_chat' || self.status === 'in_chatbot' || self.status === 'suspend_chat' || self.status === 'wait_chat') {
				try {
					if (localStorage) {localStorage.setItem("windowStatus", "close");} else {setCookie("windowStatus", "close");}
				}catch(e) {}
			}

			self.update();
			chatResize();
		}
		cancelQuit(e) {
			jQueryPlus("#quit_confirm").hide();
		}

		removeWindow(e) {
			if (opts.appearance.end.direct || opts.appearance.end.skip) {
				self.quit();
				return;
			}

			if (self.windowStatus === 'close') {
				self.open();
				window.setTimeout(updateConfirmWindowSize, 300);
			} else {
				updateConfirmWindowSize();
			}
			jQueryPlus("#quit_confirm").show();
		}

		hideWindow() {
			jQueryPlus('#chatplusview').hide();
			chatClient.trigger('hideWindow');
			if (opts.appearance.hideButton && opts.appearance.hideButton.suppress) {
				chatClient.trigger('suppress');
			}
		}

		good(e) {
			var rating_field = document.getElementById("rating_field");
		  	rating_field.textContent = opts.appearance.end.goodRateMessage ? opts.appearance.end.goodRateMessage : "【良かった】で承りました";
			rating_field.style.display = 'block';
			document.getElementById("rating_buttons").style.display = 'none';
			chatClient.trigger('rateGood');
			chatClient.trigger('sendGaEvents', {actions: 'pressGood'});
		}

		bad(e) {
		  	var rating_field = document.getElementById("rating_field");
		  	rating_field.textContent = opts.appearance.end.badRateMessage ? opts.appearance.end.badRateMessage : "【良くなかった】で承りました";
			rating_field.style.display = 'block'
			document.getElementById("rating_buttons").style.display = 'none';
			chatClient.trigger('rateBad');
			chatClient.trigger('sendGaEvents', {actions: 'pressBad'});
		}

		valid_name() {
		  var error = false;
		  if(this.visitor_name.value=="") {
		  	document.getElementById("error_visitor_name").style.display = "block";
		  	document.getElementById("start_btn").disabled = "disabled";
		  	document.getElementById("name_form_group").className = "form-group has-error";
		  	error = true;
		  }else {
		  	document.getElementById("error_visitor_name").style.display = "none";
		  	document.getElementById("start_btn").disabled = "";
		  	document.getElementById("name_form_group").className = "form-group";
		  }
		  return error;
		}

		imagemapMessage(e) {
    		//連打防止
    		if (self.forcedMessaging) return;
			self.forcedMessaging = true;
			setTimeout(function(){ self.forcedMessaging = false; }, 250);

			var index = jQueryPlus(e.target).closest("map").find("area").index( jQueryPlus(e.target) )+1;
			var rule_id = jQueryPlus(e.target).closest(".view-content").data("rule");
			sendForcedMessage({'value': jQueryPlus(e.target).data("text").toString(), rule_id:rule_id, rule_num:index, target:e.target});
			if (opts.appearance.talking.imageMapOnce) {
				self.showKeyboard();
			}
		}

		function sendForcedMessage(target) {
			if (!target.value) {return;}
			if (/^close_chat/.test(self.status)) {return;}

			target.value = target.value.replace(/\\r\\n/g, '\n');

			var text = "";
			var no_assign = target.no_assign || false;
			var no_message = false;

			var targetRule = "3_000000_01";	//初回メッセージ
			if (target.target && jQueryPlus(target.target).closest("#userOperationImage").data("rule"))
                targetRule = jQueryPlus(target.target).closest("#userOperationImage").data("rule"); //下部のイメージマップ
			if(jQueryPlus(target).closest(".view-content").data("rule"))
                targetRule = jQueryPlus(target).closest(".view-content").data("rule");

            var rule_id = target.rule_id? target.rule_id : targetRule;
            var index = target.rule_num? target.rule_num : jQueryPlus(target).closest(".chat-ques").find("li").index( jQueryPlus(target).closest("li") )+1;
            // '_status_'が入ってたらステータス変更メッセージ
			if (/_status_/.test(target.value)) {
				// target.valueを'{text}_status_{status_to}'に分割
				var v = target.value.split(/_status_/);
				var status_to = v.pop();
				text = v.join('_status_');

				if (chatplus._.contains(['no_chat', 'in_chat', 'in_chatbot', 'suspend_chat', 'close_chat_by_visitor', 'close_chat_by_agent', 'no_agent'], status_to)) {
					chatClient.trigger('changeStatus', {
                        'status': status_to
                        , 'text': text
                        , 'rule_id':rule_id
                        , 'num':index
                    });
					return;
				}
			}

			if (target.value.indexOf("_assign_id_") != -1) {
				texts = target.value.split('_assign_id_');
				chatClient.trigger('changeAgent', {
					'mode': "id",
					'target': texts[1],
					'status': jQueryPlus(target).attr('data-status'),
                    'text': texts[0],
                    'rule_id':rule_id,
                    'num':index
				});
				text = texts[0];
				no_message = true;
			}

			if (target.value.indexOf("_assign_tag_") != -1) {
				texts = target.value.split('_assign_tag_');
				chatClient.trigger('changeAgent', {
					'mode': "tag",
					'target': texts[1],
					'status': jQueryPlus(target).attr('data-status'),
                    'text': texts[0],
                    'rule_id':rule_id,
                    'num':index
				});
				text = texts[0];
				no_message = true;
			}

			if (text == "") {
				text = target.value;
			}

			try {
				if (localStorage) {localStorage.setItem("windowStatus", "open");} else {setCookie("windowStatus", "open");}
			}catch(e) {}
			chatClient.trigger('receiveMessage', {
				name: self.customer.chat_username,
				body: "<clientmess>"+text+"</clientmess>",
				created_at: new Date().getTime(),
				event_type: 22,
				event_from: 1,
				id: self.messagePreID,
				read_flag: 0
			});

			var mess = {
				'text': text,
				'start': true,
				'no_assign': no_assign,
                'rule_id':rule_id,
                'num':index
			};

			if (! no_message) {
				chatClient.trigger('sendMessage', mess);
			}

			chatClient.trigger('sendGaEvents', {
				actions: ['sendBtnMess', 'sendBtnMessFirst'],
				message: text
			});
		}

		function sendMessage(target) {
			if (!target.value) return;
			chatClient.trigger('receiveMessage', {
				name: self.customer.chat_username,
				body: "<clientmess>"+target.value+"</clientmess>",
				created_at: new Date().getTime(),
				event_type: 21,
				event_from: 1,
				id: self.messagePreID,
				read_flag: 0
			});

			chatClient.trigger('sendMessage', {
				text: target.value
			});

			chatClient.trigger('sendGaEvents', {
				actions: ['sendTypeMess', 'sendTypeMessFirst'],
				message: target.value
			});
			target.value = "";
		}

		function execRule(ruleId) {
            chatClient.trigger('execRule', {
                id: ruleId
            });
		}

		function fitChat() {
			if (self.status == 'in_chat' || self.status == 'in_chatbot' || self.status == 'greeting' || self.status == 'close_chat_by_agent' || self.status == 'close_chat_by_visitor' || self.status == 'close_chat_by_mute') {
				// updateMessageArea();

				//css-transitionが実装されている場合、transition終了後に高さ判定行うようにする
				if (jQueryPlus("#chatplusview").hasClass("chatplusview-modern") || (jQueryPlus("#chatplusview").css("transition")).indexOf("height") != -1 ) {
					jQueryPlus('#chatplusview').on('oTransitionEnd mozTransitionEnd webkitTransitionEnd transitionend', function(){
						jQueryPlus('#chatplusview').off('oTransitionEnd mozTransitionEnd webkitTransitionEnd transitionend');
						setTimeout(function(){
							updateMessageArea();
							updateConfirmWindowSize();
						},200);
					});
				} else {
					setTimeout(function() {
						updateMessageArea();
						updateConfirmWindowSize();
					}, 300);
				}
			}
		}

		function addVisitorAttribute(attr, ex) {
            if (self.status == 'in_chat' || self.status == 'in_chatbot' || self.status == 'greeting') {
                chatClient.trigger('addVisitorAttribute', {
                    attr: attr
                }, !!(ex));
			}
			if (ex && window.chatplus && window.chatplus.send_pardot_form) {
				window.chatplus.send_pardot_form({
					'serial': chatplusData.customer.serial_number,
					'name': attr.name || attr.chatName || attr.perhapsName,
					'companyName': attr.companyName || attr.chatCompanyName || attr.perhapsCompanyName,
					'email': attr.email || attr.chatEmail || attr.perhapsEmail,
					'tel': attr.tel || attr.chattel || attr.perhapstel,
				});
			}
		}

		function addVisitorTag(tag) {
            if (self.status == 'in_chat' || self.status == 'in_chatbot' || self.status == 'greeting') {
                chatClient.trigger('addVisitorTag', {
                    value: tag
                });
            }
        }

		function postback(url, value, type, chatinfo) {
			if (self.status == 'in_chat' || self.status == 'in_chatbot' || self.status == 'greeting') {
				chatClient.trigger('postback', {
					url: url,
					value: value,
					type: type,
					chatinfo: chatinfo,
				});
			}
		}

		//riotタグのまま残ることがあるので、設定しなおす
		var isIE = window.navigator.userAgent.toLowerCase().indexOf("msie") != -1
						|| window.navigator.userAgent.toLowerCase().indexOf("trident/7") != -1;

		function chatResize() {
			if (jQueryPlus('#chatplusview:visible').length <= 0) {return;}

			if (jQueryPlus('#chatplusview').hasClass("chatplusview-modern")) {
				if (opts.appearance.themeParams.heightType !== 'pct' && opts.appearance.themeParams.heightPx && opts.appearance.themeParams.heightPx > window.innerHeight && jQueryPlus('#chatplusview #fix-heightpx').length == 0) {
					var style = '#chatplusview.float.chatplusview-modern.closed {bottom: -100%;}';
					jQueryPlus('<style>', {'id': 'fix-heightpx', 'text': style}).appendTo('#chatplusview');
				}
				if (self.windowStatus !== 'close') {
					fixModernMess();
				}
			}

			if (self.windowStatus !== 'close' && !self.chatbuttonFlag && self.mobileFlag && opts.appearance.themeParams.spHeight) {
				// 縮小表示
				if (self.compressed === void(0)) {
					self.compress();
				}
				if (self.compressed) {
					fitChat();
					replaceForIE();
				}
			}

			if (self.status == 'in_chat' || self.status == 'in_chatbot' || self.status == "greeting") {
				jQueryPlus("#chatplusview #oabtt706").css("display","inline");
			} else {
				jQueryPlus("#chatplusview #oabtt706").css("display","none");
			}

			if (!(_ua.Mobile || _ua.Tablet) && self.windowStatus != 'close' && self.chatbuttonFlag == true) {
				if ((self.status == 'in_chat' || self.status == 'in_chatbot') && jQueryPlus("#chatplusview").hasClass("chatplusview-basic")) {
					var paddingsize=33;
					var chatplusheader = document.getElementById('chatplusheader').clientHeight + paddingsize;
                	var chatplusframe = document.getElementById('chatplusframe')? document.getElementById('chatplusframe').offsetHeight + chatplusheader : chatplusheader;
                	var chatpluscontent = document.getElementById('chatpluscontent').clientHeight - chatplusframe;
                	var textareaHeight = document.getElementById('textarea') ? document.getElementById('textarea').clientHeight : 0;
                	var chatplusfooter = document.getElementById('chatplusfooter').clientHeight;
					chatplusfooter+=42;
					var heightMess = chatpluscontent - (textareaHeight + chatplusfooter);
					jQueryPlus("#chatplusview #messages").css("height", heightMess+"px")
					jQueryPlus("#chatplusview #chatplusfooter").css("padding", 3+"px");
					jQueryPlus("#chatplusview #messages").css("padding-bottom", 0+"px");

				}
			}
			else if((_ua.Mobile || _ua.Tablet) && self.status=="no_agent") {
				if (!this.contact_form_height && jQueryPlus("#chatplusview #chatpluscontent form").height())
					this.contact_form_height = jQueryPlus("#chatplusview #chatpluscontent form").height();
				jQueryPlus("#chatplusview form").css("height", this.contact_form_height+jQueryPlus("#chatplusview #chatpluscontent h2").height()+30+"px");
			}

			replaceForIE();

			if (!(_ua.Mobile || _ua.Tablet)) {
				if (self.windowStatus !== 'close' && jQueryPlus('#chatplusview').hasClass('float')) {
					fitChat();
				}
			} else {
				if (self.windowStatus != 'close' && ! self.compressed) {
					jQueryPlus('body')
						.attr({'data-y': window.pageYOffset})
						.css({
							'overflow-y': 'hidden',
							'height': '100%',
						});
				} else {
					var y = parseInt(jQueryPlus('body').attr('data-y'));
					jQueryPlus('body')
						.attr({'data-y': null})
						.css({
							'overflow-y': '',
							'height': '',
						});
					if (y) {window.scrollTo(0, y);}
				}

				fitChat();
			}
		}

		showKeyboard() {
			jQueryPlus.when(
				jQueryPlus("#chatplusview #userOperationImage").slideUp("fast"),
				jQueryPlus("#chatplusview #userOperationArea").slideUp("fast"),
				jQueryPlus("#chatplusview #chattext").slideDown("fast")
			).done(function() {
				jQueryPlus("#chatplusview #chattext").css({'display': ''}).removeClass('cp-hide');
				updateMessageArea();
				updateConfirmWindowSize();
			});
		}
		showImagemap() {
			jQueryPlus.when(
				jQueryPlus("#chatplusview #chattext").slideUp("fast"),
				jQueryPlus("#chatplusview #userOperationImage").slideDown("fast"),
				jQueryPlus("#chatplusview #userOperationArea").slideDown("fast")
			).done(function(){
				jQueryPlus("#chatplusview #chattext").css({'display': ''}).addClass('cp-hide');
				jQueryPlus('#chatplusview #tapMessage .fa').removeClass('fa-caret-up').addClass('fa-caret-down');
				updateMessageArea();
				updateConfirmWindowSize();
			});
		}
		switchImagemap() {
			if ( jQueryPlus("#chatplusview #userOperationImage").css("display")=="none" ) {
				jQueryPlus("#chatplusview #userOperationImage").show();
				jQueryPlus('#chatplusview #tapMessage .fa').removeClass('fa-caret-up').addClass('fa-caret-down');
				updateMessageArea();
				updateConfirmWindowSize();
			}else {
				jQueryPlus("#chatplusview #userOperationImage").hide();
				jQueryPlus('#chatplusview #tapMessage .fa').removeClass('fa-caret-down').addClass('fa-caret-up');
				updateMessageArea(true);
				updateConfirmWindowSize();
			}
		}

		powered() {
			var v = confirm((opts.powered || 'ChatPlus')+'公式サイトに移動します。 よろしいですか?');
			if (v) {window.open(opts.siteurl);}
		}


		if (document.getElementById("chatpluscontent")) {
			chatResize();
		} else {
			setTimeout(function(){
				chatResize();
				updateConfirmWindowSize();
			},1500);
			chatResize();
		}

		function updateMessageArea(hide_imagemap) {
			jQueryPlus('#chatplusview #body').css('padding-bottom', '0');

			if (jQueryPlus('#chatplusview').hasClass('chatplusview-modern')) {
				return;
			}

			if (jQueryPlus('#chatplusview').hasClass('closed')) {
				return;
			}


			var heightMess = 0;
			var height_expression = '';

			var paddingsize = jQueryPlus('#chatplusview #body').innerHeight() - jQueryPlus('#chatplusview #body').outerHeight(true);
			var chatplusheader = jQueryPlus('#chatplusview #chatplusheader').outerHeight(true) + paddingsize;
			var chatplusframe = (jQueryPlus('#chatplusview #chatplusframe:visible').outerHeight(true) || 0);
			var chatpluscontent = jQueryPlus('#chatplusview #chatpluscontent').outerHeight(true);
			var chatplusfooter = jQueryPlus('#chatplusview #chatplusfooter').outerHeight(true);

			var virtualHeight = 0;
			if (jQueryPlus('#chatplusview virtual').length > 0 ) {
				virtualHeight = jQueryPlus('#chatplusview virtual').outerHeight(true);
			}
			var profileHeight = 0;
			if (jQueryPlus('#chatplusview').hasClass('chatplusview-basic')) {
				profileHeight = jQueryPlus('#chatplusview #body #profile').outerHeight(true);
			}

			var is_float = jQueryPlus('#chatplusview').hasClass('float');
			var is_mobile = _ua.Mobile || _ua.Tablet;
			var is_compressed = is_mobile && self.compressed;
			var is_in_chatting = self.status != 'close_chat_by_agent' && self.status != 'close_chat_by_visitor' && self.status != 'close_chat_by_mute';
			var is_imagemap_enabled = opts.appearance.talking.useImageMap && is_in_chatting && !isLandscape();
			var is_imagemap_visible = jQueryPlus('#chatplusview #userOperationImage').is(':visible') && !hide_imagemap;
			var is_imagemap_notext = jQueryPlus('#chatplusview #userOperationArea').hasClass('noChatText');

			if (! is_float) {
				heightMess = (chatpluscontent - chatplusheader - chatplusframe) - (virtualHeight + profileHeight + chatplusfooter);
				height_expression = '('+chatpluscontent+'px - '+chatplusheader+'px - '+chatplusframe+'px) - ('+virtualHeight+'px + '+profileHeight+'px + '+chatplusfooter+'px)';
			} else {
				if (is_compressed) {jQueryPlus('#chatplusview').css('height', opts.appearance.themeParams.spHeight + '%')};

				var viewHeight = jQueryPlus('#chatplusview').get(0).style.height === 'auto' ? (window.innerHeight - 30) : jQueryPlus('#chatplusview').height();
				var viewBottom = parseInt(jQueryPlus('#chatplusview').css('bottom'));
				heightMess = viewHeight - viewBottom - chatplusheader - chatplusframe - (virtualHeight + profileHeight + chatplusfooter);
				height_expression = ''+viewHeight+'px - '+viewBottom+'px - '+chatplusheader+'px - '+chatplusframe+'px - ('+virtualHeight+'px + '+profileHeight+'px + '+chatplusfooter+'px)';

				// if (! is_mobile && ! is_compressed) {jQueryPlus('#chatplusview').css('height', 'auto');}
			}
			if (is_imagemap_enabled) {
				jQueryPlus('#chatplusview #chatpluscontent #body').css('height', 'auto');

				var userOperationAreaHeight = 47;
				var userOperationImageHeight = jQueryPlus('#chatplusview #userOperationImage').height();

				if (is_imagemap_visible) {
					heightMess -= (userOperationAreaHeight + userOperationImageHeight);
					height_expression += ' - ('+userOperationAreaHeight+'px + '+userOperationImageHeight+'px)';
				} else if (hide_imagemap || is_imagemap_notext) {
					heightMess -= userOperationAreaHeight;
					height_expression += ' - '+userOperationAreaHeight+'px';
				} else {
					var textareaHeight = (jQueryPlus('#chatplusview #textarea').height() || 0);
					heightMess -= textareaHeight;
					height_expression += ' - '+textareaHeight+'px';
				}
			} else {
				jQueryPlus("#chatplusview #chatpluscontent #body").css('height', '');

				var textareaHeight = (jQueryPlus('#chatplusview #textarea').height() || 0);
				if (textareaHeight > 0) {
					heightMess -= textareaHeight;
					height_expression += ' - '+textareaHeight+'px';
				}
			}

			if (heightMess > 0) {
				jQueryPlus("#chatplusview #messages").css("height", heightMess+"px");
				// jQueryPlus("#chatplusview #messages").css("height", 'calc('+height_expression+')');
			} else {
				window.console.warn('messagearea has gone', height_expression);
			}
		}

		function updateConfirmWindowSize() {
			if (jQueryPlus('#chatplusview:visible').length <= 0 || jQueryPlus('#chatplusheader').length <= 0 || jQueryPlus('#chatplusfooter').length <= 0) {
				return;
			}

			if (jQueryPlus('#chatplusview').hasClass('chatplusview-modern')) {
				fixModernMess();
			}

			if (self.windowStatus === 'close') {return;}

			var confirms = ['#file_upload_form', '#quit_confirm', '#quit_question', '#option_form'];
			var confirms_query = confirms.map(function(e) {return '#chatplusview ' + e;}).join(',');

			// Confirmの高さ = 全体の高さ-ヘッダの高さ(frame含む)-フッタの高さ
			var viewHeight = document.getElementById('chatplusview').clientHeight;
			var headerHeight = document.getElementById('chatplusheader').clientHeight;
			if (jQueryPlus('#chatplusview #body.frame').length > 0 && jQueryPlus('#chatplusview #body.frame #chatplusframe').is(':visible')) {
				headerHeight += jQueryPlus("#chatplusframe").height(); // chat_sp.css:138
			}
			var footerHeight = document.getElementById('chatplusfooter').clientHeight;

			var confirmWindowHeight = viewHeight - headerHeight - footerHeight;
			if (confirmWindowHeight <= 0) {window.console.warn('confirm has gone'); return;}
			jQueryPlus(confirms_query).css('height', confirmWindowHeight + 'px');

			// frameがあるならmargin-topをframeの高さ分だけつける
			if (jQueryPlus('#chatplusview #body.frame').length > 0 && jQueryPlus('#chatplusview #body.frame #chatplusframe').is(':visible')) {
				jQueryPlus(confirms_query).css('margin-top', jQueryPlus('#chatplusview #chatplusframe').height() + 'px');
			}
		}

		function fixModernMess() {
			if (jQueryPlus('#chatplusview #messages').length <= 0) {
				return;
			}

			// modernテーマ メッセージエリア高さ調整
			var paddings = [
				Math.max(jQueryPlus('#chatplusview #chatplusheader').height(), 0),
				Math.max(jQueryPlus('#chatplusview #textarea').height(), 0),
				Math.max(jQueryPlus('#chatplusview #userOperation').height(), 0),
				Math.max(jQueryPlus('#chatplusview virtual').height(), 0),
			];
			jQueryPlus('#chatplusview #messages').css({'height': 'calc(100% - ('+paddings.join('px + ')+'px)'});

			if(document.getElementById('userOperation')) {
				var modernOpeFix = document.getElementById('messages').clientHeight + document.getElementById('chatplusheader').clientHeight
				if(!jQueryPlus("#chatplusview-appendbtm")[0] && jQueryPlus("#chatplusview").hasClass("float")) {
					if(_ua.Mobile || _ua.Tablet) {
					} else {
						if(jQueryPlus("#chatplusview").hasClass("closed")) {
							var viewHeight = jQueryPlus("#chatplusview").height() + jQueryPlus('#chatpluscontent #userOperation').height();
						} else {
							var viewHeight = jQueryPlus("#chatplusview").height();
						}
						var viewBottom = "<style id='chatplusview-appendbtm'>#chatplusview.float.chatplusview-modern.closed { bottom:-" + String(viewHeight) + "px!important;}<\/style>";
						jQueryPlus(viewBottom).appendTo('head');
						jQueryPlus("#chatplusview").height(viewHeight);
					}
				}
				jQueryPlus("#chatplusview #chatpluscontent #userOperation").css({
					"height": "auto"
				});
					/*
					modernMessFix = document.getElementById('userOperation').clientHeight + document.getElementById('chatplusheader').clientHeight;
					document.getElementById("messages").style.height = 'calc(100% - '+modernMessFix+'px)';
					*/
			}
		}

		function replaceForIE() {
			if (!isIE)
				return;
			//西田追加
			console.log(opts.appearance.start.titleName);
			if (jQueryPlus("#cpatcn619").text().indexOf("opts.appearance.talking.counterName") != -1 ) {
					jQueryPlus("#cpatcn619").text( opts.appearance.talking.counterName || "カスタマーサポート" );
			}
			if( jQueryPlus("#oastn701").text().indexOf("opts.appearance.start.titleName") != -1 ) {
					jQueryPlus("#oastn701").text( opts.appearance.start.titleName || "名前" );
			}
			if( jQueryPlus("#oastc702").text().indexOf("opts.appearance.start.titleCompany") != -1 ) {
					jQueryPlus("#oastc702").text( opts.appearance.start.titleCompany || "会社名" );
			}
			if( jQueryPlus("#oaste703").text().indexOf("opts.appearance.start.titleEmail") != -1 ) {
					jQueryPlus("#oaste703").text( opts.appearance.start.titleEmail || "メールアドレス" );
			}
			if( jQueryPlus("#oastt704").text().indexOf("opts.appearance.start.titleTel") != -1 ) {
					jQueryPlus("#oastt704").text( opts.appearance.start.titleTel || "電話番号" );
			}
			if( jQueryPlus("#oastc705").text().indexOf("opts.appearance.start.titleContact") != -1 ) {
					jQueryPlus("#oastc705").text( opts.appearance.start.titleContact || "お問い合せ内容" );
			}
			if( jQueryPlus("#email_use").text().indexOf("opts.appearance.start.emailQuestion") != -1 ) {
					jQueryPlus("#email_use").text( opts.appearance.start.emailQuestion || "チャット終了後に、内容をメールで送信する。" );
			}
			if( jQueryPlus("#start_btn").text().indexOf("opts.appearance.start.buttonText") != -1 ) {
					jQueryPlus("#start_btn").text( opts.appearance.start.buttonText || "チャットを開始する" );
			}
			if (self.status == 'in_chat' || self.status == 'in_chatbot' || self.status == "greeting") {
				jQueryPlus("#oabtt706").css("display","inline");
			} else {
				jQueryPlus("#oabtt706").css("display","none");
			}
			if( jQueryPlus("#oabtt706").text().indexOf("opts.appearance.talking.buttonText") != -1 ) {
					jQueryPlus("#oabtt706").text( opts.appearance.talking.buttonText || "送信" );
			}
			if( jQueryPlus("#oatubt707").text().indexOf("opts.appearance.talking.uploadButtonText") != -1 ) {
					jQueryPlus("#oatubt707").text( opts.appearance.talking.uploadButtonText || "アップロード" );
			}
			if( jQueryPlus("#oatuct708").text().indexOf("opts.appearance.talking.uploadCancelText") != -1 ) {
					jQueryPlus("#oatuct708").text( opts.appearance.talking.uploadCancelText || "キャンセル" );
			}
			if( jQueryPlus("#oatun709").text().indexOf("opts.appearance.talking.uploadNote") != -1 ) {
					jQueryPlus("#oatun709").text( opts.appearance.talking.uploadNote || "※10MB以内のファイルをアップロードしてください" );
			}
			if( jQueryPlus("#cpoadb710").text().indexOf("opts.appearance.disconnect_body") != -1 ) {
					jQueryPlus("#cpoadb710").text( chatClient.parseVariables(opts.appearance.disconnect_body) || "オペレーターは今対応できません。メッセージをお残しください。すぐにこちらからご連絡いたします。" );
			}
			if( jQueryPlus("#cpoadnt711").text().indexOf("opts.appearance.disconnect_nameTitle") != -1 ) {
					jQueryPlus("#cpoadnt711").text( opts.appearance.disconnect_nameTitle || "名前" );
			}
			if( jQueryPlus("#cpoadet712").text().indexOf("opts.appearance.disconnect_emailTitle") != -1 ) {
					jQueryPlus("#cpoadet712").text( opts.appearance.disconnect_emailTitle || "メールアドレス" );
			}
			if( jQueryPlus("#cpoadbt713").text().indexOf("opts.appearance.disconnect_buttonText") != -1 ) {
					jQueryPlus("#cpoadbt713").text( opts.appearance.disconnect_buttonText || "メッセージを残す" );
			}
			if( jQueryPlus("#cpoaeat721").text().indexOf("opts.appearance.end.afterText") != -1 ) {
					jQueryPlus("#cpoaeat721").text( self.status == 'close_chat_by_mute' ? (opts.appearance.end.afterText || "一定時間新しい発言がなかったためチャットを終了しました") : (opts.appearance.end.afterText || "チャットを終了しました") );
			}
			if( jQueryPlus("#cpoaert722").text().indexOf("opts.appearance.end.restartText") != -1 ) {
					jQueryPlus("#cpoaert722").text( opts.appearance.end.restartText || "チャットを再開する" );
			}
			if( jQueryPlus("#cpoaert723").text().indexOf("opts.appearance.end.restartText") != -1 ) {
					jQueryPlus("#cpoaert723").text( opts.appearance.end.restartText || "チャットを再開する" );
			}
			if( jQueryPlus("#cpoaecm731").text().indexOf("opts.appearance.end.confirmMessage") != -1 ) {
					jQueryPlus("#cpoaecm731").text( opts.appearance.end.confirmMessage || "チャットを終了しますか？" );
			}
			if( jQueryPlus("#cpoaeeb732").text().indexOf("opts.appearance.end.endButtonText") != -1 ) {
					jQueryPlus("#cpoaeeb732").text( opts.appearance.end.endButtonText || "はい" );
			}
			if( jQueryPlus("#cpoaecbt733").text().indexOf("opts.appearance.end.cancelButtonText") != -1 ) {
					jQueryPlus("#cpoaecbt733").text( opts.appearance.end.cancelButtonText || "キャンセル" );
			}
			if( jQueryPlus("#cpoaerm740").text().indexOf("opts.appearance.end.rateMessage") != -1 ) {
					jQueryPlus("#cpoaerm740").text( chatClient.parseVariables(opts.appearance.end.rateMessage) || "いかがでしたか。よろしければ今後の改善のため、評価をお願いします。" );
			}
			if( jQueryPlus("#cpoaenm740").text().indexOf("opts.appearance.end.noRateMessage") != -1 ) {
					jQueryPlus("#cpoaenm740").text( chatClient.parseVariables(opts.appearance.end.noRateMessage) || "チャットを終了しました。ご利用ありがとうございました。" );
			}
			if( jQueryPlus("#cpoaetr741").text().indexOf("opts.appearance.end.titleRate") != -1 ) {
					jQueryPlus("#cpoaetr741").text( opts.appearance.end.titleRate || "評価" );
			}
			if( jQueryPlus("#cpoaegr742").text().indexOf("opts.appearance.end.goodRate") != -1 ) {
					var goodRateTemp = "<i class='cpfar fa-thumbs-up fa-lg' style='margin-right:3px;'></i>";
					goodRateTemp += (typeof(opts.appearance.end.goodRate) != "undefined" && opts.appearance.end.goodRate !== null)?opts.appearance.end.goodRate:"良かった";
					jQueryPlus("#cpoaegr742").html( goodRateTemp );
			}
			if( jQueryPlus("#cpoaebr743").text().indexOf("opts.appearance.end.badRate") != -1 ) {
					var badRateTemp = "<i class='cpfar fa-thumbs-down fa-lg' style='margin-right:3px;'></i>";
					badRateTemp += (typeof(opts.appearance.end.badRate) != "undefined" && opts.appearance.end.badRate !== null)?opts.appearance.end.badRate:"良くなかった";
					jQueryPlus("#cpoaebr743").html( badRateTemp );
			}
			if( jQueryPlus("#cpoatpb744").text().indexOf("opts.appearance.end.buttonText") != -1 ) {
					jQueryPlus("#cpoatpb744").text( opts.appearance.end.buttonText || "閉じる" );
			}

			if (jQueryPlus('#chatplusview #chatplusheader .title').text().indexOf('opts.appearance.talking.title') != -1) {
				var text = opts.appearance.talking.title || 'お困りではありませんか？';
				if (self.status == 'close_chat_by_visitor' || self.status == 'close_chat_by_agent' || self.status == 'close_chat_by_mute') {
					text = opts.appearance.end.title || 'ありがとうございました';
				} else if (self.status == 'wait_chat') {
					text = callingTitle || '担当者に接続中です'
				}
				jQueryPlus('#chatplusview #chatplusheader .title').text(text);
			}
		}

		var chatplusintervalcount=0;
		var chatplusintervalID = setInterval(function(opts){

			if(chatplusintervalcount>=12) {
				clearInterval( chatplusintervalID );
				jQueryPlus("#chatplusview #chatplusheader .name").show();
			}

			if ( jQueryPlus("#chatplusheader").attr("id")=="chatplusheader" ) {
				if( opts.appearance.disconnect_title && jQueryPlus("#chatplusheader .name").text() && jQueryPlus("#chatplusheader .name").text().indexOf("opts.appearance.disconnect_title") != -1 ) {
					jQueryPlus("#chatplusheader .name").text(opts.appearance.disconnect_title);
				}
				if( opts.appearance.disconnect_body && jQueryPlus("#chatpluscontent #body h2").text() && jQueryPlus("#chatpluscontent #body h2").text().indexOf("opts.appearance.disconnect_body") != -1 ) {
					jQueryPlus("#chatpluscontent #body h2").text(opts.appearance.disconnect_body);
				}

				// console.log("IE: " + isIE);
				replaceForIE();

				clearInterval( chatplusintervalID );
				jQueryPlus("#chatplusheader .name").show();

			    	//横向きの場合、イメージマップを表示しない
				if ( opts.appearance.talking.useImageMap ) {
					if (isLandscape()) {
						jQueryPlus("#chatplusview #chattext").removeClass('cp-hide');
						jQueryPlus("#chatplusview .swtimg").hide();
						jQueryPlus("#chatplusview #userOperationImage").hide();
						jQueryPlus("#chatplusview #userOperationArea").hide();
					}else {
						jQueryPlus("#chatplusview #chattext").addClass('cp-hide');
						jQueryPlus("#chatplusview .swtimg").show();
						jQueryPlus("#chatplusview #userOperationImage").show();
						jQueryPlus("#chatplusview #userOperationArea").css("display", "flex");
					}
					fitChat();
				}
			}
			chatplusintervalcount++;
		}, 300, opts);

		this.variableTexts = {
			startExplanation: opts.appearance.start.explanation,
			startRemark: opts.appearance.start.remark,
			disconnectBody: opts.appearance.disconnect_body,
			disconnectRemark: opts.appearance.disconnect_remark,
			endNoRateMessage: opts.appearance.end.noRateMessage,
			endRateMessage: opts.appearance.end.rateMessage,
			endQuestionMessage: opts.appearance.end.questionMessage
		};
		this.parseVariableTexts = function() {
			var p = chatClient.parseVariables;
			var v = self.variableTexts;
			var a = opts.appearance;
			switch (self.status) {
				case 'no_chat':
					v.startExplanation = p(a.start.explanation);
					v.startRemark = p(a.start.remark);
					break;
				case 'no_agent':
					v.disconnectBody = p(a.disconnect_body);
					v.disconnectRemark = p(a.disconnect_remark);
					break;
				case 'wait_chat':
					//waitChatイベント内に記述
					break;
				case 'in_chat':
				case 'in_chatbot':
					break;
				case 'close_chat_by_visitor':
				case 'close_chat_by_agent':
				case 'close_chat_by_mute':
				case 'quit':
					v.endNoRateMessage = p(a.end.noRateMessage);
					v.endRateMessage = p(a.end.rateMessage);
					v.endQuestionMessage = p(a.end.questionMessage);
					break;
			}
		}
		this.on('update', self.parseVariableTexts);
		this.parseVariableTexts();

		showPastMessages(e) {
			e.preventUpdate = true;
			chatClient.trigger('pastMessages', {});
		}

		this.pastMessagesPosi = 0;
		this.pastMessagesFlag = false;
		this.scrollDummyHeight = 0;
		chatClient.on('showPastMessages', function(data) {
			if (data.messages) {
				if (opts.appearance.themeName == "app") {
					self.pastMessagesPosi = 0;
					jQueryPlus('#chatplusview #messages .view-content').each(function() {
						self.pastMessagesPosi += jQueryPlus(this).outerHeight();
					});
					self.scrollDummyHeight = jQueryPlus('#chatplusview #messages').height() - self.pastMessagesPosi;
				} else {
					self.pastMessagesPosi = jQueryPlus('#chatplusview #messages .view').height();
					self.scrollDummyHeight = jQueryPlus('#chatplusview #messages').height() - jQueryPlus('#chatplusview #messages .view').outerHeight();
				}

				var messages = [];
				var pastDate = null;

				for (var i = 0; i< data.messages.length; i ++) {
					var message = data.messages[i];
					message.body = message.body.replace(/[{}]/g, function(c) {return {'{':'&#x0007b;','}':'&#x0007d;'}[c];});
					message.past = 1;
					if (message.event_type != 12) {
						var messDate = message.created_at.split(" ")[0];
						if (pastDate != messDate) {
							messages.push({date: messDate, id:message.created_at, created_at:message.created_at, body:messDate});
							pastDate = messDate;
						}

						messages.push(message);
					}
				}

				if (self.messages.length && self.messages[0].date) {
					self.messages.shift();
				}

				if (self.messages.length) {
					var message = self.messages[0];
					var messDate = message.created_at.split(" ")[0];
					if (pastDate != messDate) {
						messages.push({date: messDate, id:message.created_at, created_at:message.created_at, body:messDate});
					}
				}

				self.messages = messages.concat(self.messages);
				self.pastMessagesFlag = true;
				if (data.end)
					self.pastMessages = false;
				if (self.scrollDummyHeight > 0)
					jQueryPlus('#chatplusview #scroll-dummy').height(self.scrollDummyHeight);
				self.update();
			}
		});

		this.scrollMessage = function(e) {e.preventUpdate = true;};
		if (opts.rewind && opts.rewind.enabled && opts.rewind.options.scroll) {
			var pastMessageLoading = false;
			this.scrollMessage = chatplus._.debounce(function() {
				if (pastMessageLoading) {return;}

				var elem = jQueryPlus('#chatplusview #messages');
				if (elem.scrollTop() < 1) {
					pastMessageLoading = true;

					elem.scrollTop(1);
					jQueryPlus('#chatplusview .past-mess-throbber').show();
					jQueryPlus('#chatplusview .past-mess-anchor').hide();

					chatClient.trigger('pastMessages', {
						'callback': function(result) {
							jQueryPlus('#chatplusview .past-mess-throbber').hide();
							if (result) {
								jQueryPlus('#chatplusview .past-mess-anchor').show();
								pastMessageLoading = false;
							} else {
								jQueryPlus('#chatplusview #past-mess-block').hide();
							}
						},
					});
				}
			}, 500);
		}

		var scrollIntoMessage = function(msg_id) {
			var msg = jQueryPlus('#chatplusview #messages #msg_'+msg_id)[0];
			if (! msg) {return;}
			var top = msg.offsetTop - jQueryPlus('#chatplusview #messages')[0].offsetTop - (msg.offsetHeight / 2);
			jQueryPlus('#chatplusview #messages').animate({'scrollTop': top}, 'fast');
		};


		this.on('updated', function() {
			if (self.pastMessagesFlag) {
				if (opts.appearance.themeName == "app") {
					var viewHeight = 0;
					jQueryPlus('#chatplusview #messages .view-content').each(function() {
						viewHeight += jQueryPlus(this).outerHeight();
					});
					if (jQueryPlus('#chatplusview #scroll-dummy').height())
						jQueryPlus('#chatplusview #messages').scrollTop(2000000);
					else
						jQueryPlus('#chatplusview #messages').scrollTop(viewHeight - self.pastMessagesPosi);
				} else {
					jQueryPlus('#chatplusview #messages').scrollTop(jQueryPlus('#chatplusview #messages .view').height() - self.pastMessagesPosi);
				}
				self.pastMessagesFlag = false;
				if (jQueryPlus('#chatplusview #scroll-dummy').height())
					jQueryPlus('#chatplusview #scroll-dummy').animate({height: "0px"}, "normal");
			}
		});
		function setCookie(c_name,value) {
			// pathの指定
            var path = "/";
            // 有効期限の日付
            var extime = new Date().getTime();
            var cltime = new Date(extime + (1000 * 3600 * 24 * 365 * 20)); //20年
            var exdate = cltime.toUTCString();
            // クッキーに保存する文字列を生成
            var s="";
            s += c_name+"="+ escape(value);// 値はエンコードしておく
            s += "; path="+ path;
            s += "; expires=" +exdate+"; ";
            // クッキーに保存
            document.cookie=s;
		}
		function getCookie(c_name) {
			var st="";
            var ed="";
            if(document.cookie.length>0){
                // クッキーの値を取り出す
                    st=document.cookie.indexOf(c_name + "=");
                    if(st!=-1){
                st=st+c_name.length+1;
                ed=document.cookie.indexOf(";",st);
                if(ed==-1) ed=document.cookie.length;
                // 値をデコードして返す
                return unescape(document.cookie.substring(st,ed));
            }
        }
        return null;
		}
		function removeCookie(c_name) {
			// pathの指定
            var path = "/";
            // 有効期限の日付
            var exdate = "Thu, 01 Jan 1970 00:00:00 GMT";
            // クッキーに保存する文字列を生成
            var s="";
            s += c_name+"=";// 値はエンコードしておく
            s += "; path="+ path;
            s += "; expires=" +exdate+"; ";
            // クッキーに保存
            document.cookie=s;
		}
	</script>
</chat>
