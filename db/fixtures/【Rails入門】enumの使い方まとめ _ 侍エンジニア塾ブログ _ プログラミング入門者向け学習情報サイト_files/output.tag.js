<raw>
	var messTxt = opts.content;
	if (messTxt.indexOf("<clientmess>") !== -1) {
		messTxt = messTxt.replace(/^<clientmess>/g, "").replace(/<\/clientmess>$/g, "");
		this.root.innerHTML = messTxt.replace(/ on(\w+)=/g, ':ON:\1:');
	} else {
		this.root.innerHTML = messTxt;
	}
</raw>

<nlbr>
	var messTxt = opts.content;
	if (messTxt.indexOf("<clientmess>") !== -1) {
		messTxt = messTxt.replace(/<clientmess>/g, "").replace(/<\/clientmess>/g, "");
		messTxt = getMesstxt(messTxt);
	} else {
		if (messTxt.indexOf("<chatplusscript>") !== -1) {
			messTxt = getMesstxt(messTxt);
		} else {
			messTxt = getMesstxt(messTxt,"agent_mess");
		}
	}
	messTxt = messTxt.replace(/\r\n/g, "<br />").replace(/(\n|\r)/g, "<br />");
	messTxt = messTxt.replace('<span class="event-trigger">', '<span class="event-trigger"><i class="fas fa-bolt" ></i>');
	this.root.innerHTML = messTxt;
</nlbr>

<abr>
	var update = function() {
		if (opts.cptag) {
			this.root.innerHTML = getMesstxt(opts.content).replace(/(\r\n?|\n)/g, "<br />");
		} else {
			this.root.innerHTML = to_link(opts.content).replace(/\r\n/g, "<br />").replace(/(\n|\r)/g, "<br />");
		}
	}.bind(this);
	update();
	this.on('update', update);
</abr>

<timestamp>
	var self = this;
	require(['moment', 'underscorestring'], function(moment, _s) {
		var offset = '+09:00';
		if (typeof(opts.timediff) === 'number') {
			var timediff = opts.timediff + (moment().utcOffset() / 60);
			offset = (timediff >= 0 ? '+' : '-') + _s.lpad(Math.floor(timediff), 2, '0') + ':' + _s.lpad((timediff - Math.floor(timediff)) * 60, 2, '0');
		}
		self.root.innerText = moment(opts.content).utcOffset(offset).format(opts.format);
	});
</timestamp>
<timestampclient>
	var self = this;

	var timezoneoffset = (new Date()).getTimezoneOffset() / -60;
	var timediff = 0;
	if (typeof(opts.offset) === 'number') {
		timediff = opts.offset - timezoneoffset + 9;
	} else if (opts.timezone && /_[-+]?\d+$/.test(opts.timezone)) {
		timediff = parseInt(opts.timezone.split('_')[1]) - timezoneoffset;
	}

	var leftpad = function(s_, l, c) {
		var s = s_.toString();
		if ('padStart' in String.prototype) {return s.padStart(l, c);}
		var x = '';
		for (var i = s.length; i < l; i++) {x += c;}
		return x + s;
	};

	var date = null;
	if (typeof(opts.content) === 'number') {
		date = new Date(opts.content + 3600000 * timediff);
	} else {
		var datestring = opts.content.replace(/-/g, '/') + ' +0900'; // ex:"2112/03/09 12:34:56 +0900"
		date = new Date(Date.parse(datestring) + 3600000 * timediff);
	}

	// TODO: opts.format解釈 現在は"HH:MM"決め打ち
	self.root.innerText = leftpad(date.getHours(), 2, '0')+':'+leftpad(date.getMinutes(), 2, '0');
</timestampclient>

<datestampclient>
	var self = this;

	var timezoneoffset = (new Date()).getTimezoneOffset() / -60;
	var timediff = 0;
	if (typeof(opts.offset) === 'number') {
		timediff = opts.offset - timezoneoffset + 9;
	} else if (opts.timezone && /_[-+]?\d+$/.test(opts.timezone)) {
		timediff = parseInt(opts.timezone.split('_')[1]) - timezoneoffset;
	}

	var date = null;
	if (typeof(opts.content) === 'number') {
		date = new Date(opts.content + 3600000 * timediff);
	} else {
		var datestring = opts.content.replace(/-/g, '/') + ' +0900'; // ex:"2112/03/09 12:34:56 +0900"
		date = new Date(Date.parse(datestring) + 3600000 * timediff);
	}

	// TODO: opts.format解釈
	self.root.innerText = date.toLocaleDateString();
</datestampclient>

<elapsedtime>
	var date = new Date(opts.time);
	if (date.toString() !== 'Invalid Date') {
		var t = ((new Date()).getTime() - date.getTime())/1000;
		var str = "";
		var d = t / (3600*24) | 0;
		var h = t / 3600 | 0;
		var m = t % 3600 / 60 | 0;
		var s = t % 60;
		if (d != 0) {
			str = d + "日";
		} else if (h != 0) {
			str = h + "時間";
		} else if (m != 0) {
			str = m + "分";
		}
		this.root.innerText = str? str+"前" : "";
	} else {
		this.root.innerText = "";
	}
</elapsedtime>

<summarytext>
	var maxlength = 14;
	if(opts.maxlength) maxlength = opts.maxlength;
	if(opts.string && opts.string.length > maxlength) {
	    opts.string = opts.string.substring(0,maxlength-1)+"…";
	}
	this.root.innerText = opts.string;
</summarytext>

<chatbatch>
	var config = opts.config !== void(0) ? opts.config.batch : {'notice_at': 30, 'warn_at': 60};
	var self = this;
	require(['underscorestring'], function(_) {
		var now = new Date();
		var time = Math.floor(now.getTime()/1000)-opts.time;
		var batch = '<span class="badge blue">&nbsp;</span>';
		if (time >= config.warn_at) {
			batch = '<span class="badge red">&nbsp;</span>';
		} else if (time >= config.notice_at) {
			batch = '<span class="badge yel">&nbsp;</span>';
		}
		if (self.root.innerHTML !== batch) {
			self.root.innerHTML = batch;
		}
		window.clearInterval(intervalID);
		var intervalID = window.setInterval(function(p){

			var now = new Date();
			var time = Math.floor(now.getTime()/1000)-p.time;
			var batch = '<span class="badge blue">&nbsp;</span>';
			if (time >= p.conf.warn_at) {
				batch = '<span class="badge red">&nbsp;</span>';
			} else if (time >= p.conf.notice_at) {
				batch = '<span class="badge yel">&nbsp;</span>';
			}
			p.me.root.innerHTML = batch;

			if (p.me.root.innerHTML !== batch) {
				p.me.root.innerHTML = batch;
			}
			if (time >= p.conf.warn_at)
				window.clearInterval(intervalID);

		}, 1000, {time: opts.time, me: self, conf: config});
	});
</chatbatch>

<flag>
	var flg = "093";
	var w = opts.width? "width='"+opts.width+"'" : "";
	var countryMap = {'日本': '093', 'アイスランド': '084', 'アイルランド': '089', 'アゼルバイジャン': '013', 'アメリカ合衆国': '198', 'アラブ首長国連邦': '196', 'アルジェリア': '003', 'アルゼンチン': '008', 'アルメニア': '009', 'アンティング・バーブーダ': '007', 'イエメン': '207', 'イギリス': '197', 'イスラエル': '090', 'イタリア': '091', 'イラク': '088', 'イラン・イスラム共和国': '087', 'インド': '085', 'インドネシア': '086', 'ウクライナ': '195', 'ウズベキスタン': '200', 'エクアドル': '054', 'エジプト': '207', 'エストニア': '060', 'オーストラリア': '011', 'オーストリア': '012', 'オランダ': '134', 'ガーナ': '071', 'カタール': '153', 'カナダ': '033', 'カンボジア': '031', 'キプロス': '048', 'ギリシャ': '073', 'グアテマラ': '076', 'クウェート': '100', 'グルジア': '069', 'クロアチア': '046', 'ケニア': '096', 'コートジボワール': '045', 'コロンビア': '040', 'サウジアラビア': '163', 'シンガポール': '169', 'スイス': '181', 'スウェーデン': '180', 'スペイン': '175', 'スリランカ': '176', 'セーシェル': '167', 'セルビア': '166', 'タイ': '185', 'タンザニア': '184', 'チェコ': '049', 'チュニジア': '190', 'チリ': '038', 'デンマーク': '050', 'ドイツ': '070', 'ドミニカ共和国': '053', 'トリニダード・トバゴ': '189', 'トルコ': '191', 'ナイジェリア': '138', 'ニュージーランド': '135', 'ネパール': '133', 'ノルウェー': '139', 'パキスタン': '142', 'パナマ': '145', 'パレスチナ': '144', 'ハンガリー': '082', 'バングラデシュ': '016', 'フィリピン': '149', 'フィンランド': '065', 'プエルトリコ': '152', 'ブラジル': '026', 'フランス': '066', 'ベトナム': '204', 'ベネズエラ・ボリバル共和国': '203', 'ベラルーシ': '018', 'ペルー': '148', 'ベルギー': '019', 'ポーランド': '150', 'ボリビア多民族国': '023', 'マカオ': '111', 'マダガスカル': '113', 'マルタ': '118', 'マレーシア': '115', 'メキシコ': '122', 'モーリシャス': '121', 'モルディブ': '116', 'モルドバ共和国': '124', 'モロッコ': '128', 'モンゴル': '126', 'リトアニア': '109', 'リビア': '107', 'ルーマニア': '154', 'ルクセンブルク': '110', 'ロシア連邦': '155', '香港': '083', '大韓民国': '099', '中華人民共和国': '039', '南アフリカ': '174', '台湾（台湾省/中華民国）': '210',};
	if( opts.name && opts.name in countryMap ) {
		flg = countryMap[ opts.name ];
	}
	this.root.innerHTML = '<img src="/admin/assets/img/flag_png/flag'+flg+'.png" '+w+' class="flag" />';
</flag>

function to_link(str) {
    str = str.replace(/(&quot;|&amp;|&lt;|&gt;)/g, function(e) {return {'&quot;': '"', '&amp;': '&', '&lt;': '<', '&gt;': '>'}[e];});
    if (/(href|src|data-action)="/.test(str)) {return str;}

    // var r_alpha = '[A-Za-z]';
    var r_alphanumeric = '[0-9A-Za-z]';
    var r_multibyte = '[\\u0080-\\u2fff\\u3001-\\uffff]'; // \u3000 = '　'
    var r_escape = '(?:%[0-9A-Fa-f]{2})';
    var r_xalpha = '(?:[-0-9A-Za-z$_@.&!*(),=#]|'+r_multibyte+'|'+r_escape+')';
    var r_xpalpha = '(?:[-0-9A-Za-z$_@.&!*(),=#+]|'+r_multibyte+'|'+r_escape+')';
    var r_hostname = '(?:'+r_alphanumeric+r_xpalpha+')(?:\\.'+r_alphanumeric+r_xpalpha+')*';
    var r_hostnumber = '(?:[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+)';
    var r_host = '(?:'+r_hostname+'|'+r_hostnumber+')';
    var r_port = '(?::[0-9]+)'
    var r_path = '(?:'+r_xpalpha+'+)(?:\\/'+r_xpalpha+'*)*';
    var r_search = '(?:'+r_xalpha+'+)(?:\\+(?:'+r_xalpha+'+))*'
    var r_httpaddress = 'https?:\\/\\/'+r_host+r_port+'?'+'\\/?(?:'+r_path+')*'+'(?:\\?'+r_search+')?'+'(?:#'+r_xpalpha+'+)?';

    // console.log(r_httpaddress);

    return (str+'').replace(new RegExp(r_httpaddress, 'g'), '<a href="$&" target="_blank">$&</a>');
}

function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

function isBase64(str) {
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
}

function getMesstxt(messTxt,type) {
    if (messTxt.indexOf("<chatplusscript>") !== -1) {
        messTxt = messTxt.replace(/<chatplusscript>/g, "").replace(/<\/chatplusscript>/g, "");
        messTxt = (isBase64(messTxt))? b64DecodeUnicode(messTxt):messTxt;
        messTxt = messTxt;
    }
    messTxt = messTxt.replace(/<a([^>]*?)href\s*=\s*(['"])([^\2]*?)\2\1*>([^>]*?)<\/a>/mg, '$4');
    messTxt = messTxt.replace(/&#x0007b;/g, "{").replace(/&#x0007d;/g, "}");
    if (type != "agent_mess") {
        messTxt = messTxt.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    }

    messTxt = messTxt.replace(/\[#.*\]$/, '');

    if (messTxt.indexOf("[[") !== -1 && messTxt.indexOf("]]") !== -1){
        messTxt = messTxt.replace(/\[\[(.*?)\]\]/g, function(a, b){
            return getMessPrefix('[[' + b + ']]',type);
        });
    }

    if (! /(img src=|data-url=)['"](https?|ftp):/.test(messTxt)) {
        messTxt = to_link(messTxt);
    }
    return messTxt;
}

function getMessPrefix(messText,type) {
    var style,contentTxt;
    var textTemp = messText;
    if (type!="agent_mess") {
        textTemp.replace(/\[\[(.*?)&quot;\:/g, function(a, b){
            style = b + '"';
        });
        textTemp.replace(/&quot;\:(.*?)\]\]/g, function(a, b){
            contentTxt = b;
        });
    } else {
        textTemp.replace(/\[\[(.*?)\"\:/g, function(a, b){
            style = b + '"';
        });
        textTemp.replace(/\"\:(.*?)\]\]/g, function(a, b){
            contentTxt = b;
        });
    }

    if (style == undefined && contentTxt == undefined) {
        textTemp.replace(/\[\[(.*?)\:/g, function(a, b){
            style = b;
        });
        textTemp.replace(/\:(.*?)\]\]/g, function(a, b){
            contentTxt = b;
        });
    }

    if (style !== undefined && contentTxt !== undefined) {
        var link_type = "";
        var link_target = "";
        var str_style = "";
        style = style.replace(/&quot;/g, '"');

        var tags = style.match(/(cp\w+(?:="[^"]+")?);?/g) || [];
        for (var i = 0, l = tags.length; i < l; i++) {
            var parsed = tags[i].match(/cp(\w+)(?:="([^"]+)")?/);
            if (! parsed || parsed.length < 2) {continue;}

            var style_type = parsed[1];
            var style_value = parsed[2] || '';

            if (style_type === 'link' || style_type === 'link_target') {
                link_type = style_type;
                link_target = style_value;
            } else {
                str_style = getStyle(style_type, style_value, str_style);
            }
        }
        var str_tyle_full = (str_style != undefined && str_style.length > 0)? 'style="' + str_style + '"':"";
        if (link_type) {
            if (link_type=="link_target")
                return '<a ' + str_tyle_full + ' href="' + link_target + '" target="_blank">' + contentTxt + '<\/a>';
            else if(style_type=="link")
                return '<a ' + str_tyle_full + ' href="' + link_target + '">' + contentTxt + '<\/a>';
        } else {
            return '<span ' + str_tyle_full + ' >' + contentTxt + '<\/span>';
        }

    } else {
        return to_link(messText);
    }
}

//Add style here
function getStyle(style_type, style_value, str_style) {
    if (style_value == undefined) {
        style_type = style_type.replace(/cp/g, '');
    }
    // size style
    if (style_type == "size") {
        str_style += "font-size:" + style_value + ";";
    }
    // color style
    if (style_type == "color") {
        str_style += "color:" + style_value + ";";
    }
    // bold style
    if (style_type == "b") {
        str_style += "font-weight:bold;";
    }
    // italic style
    if (style_type == "i") {
        str_style += "font-style:italic;";
    }
    // unserline style
    if (style_type == "u") {
        str_style += "text-decoration: underline;";
    }

    return str_style;

}
