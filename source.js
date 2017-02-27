var jsonp = [
  {
    "stream": {
      "mature": false,
      "status": "Greg working on Electron-Vue boilerplate w/ Akira #programming #vuejs #electron",
      "broadcaster_language": "en",
      "display_name": "FreeCodeCamp",
      "game": "Creative",
      "language": "en",
      "_id": 79776140,
      "name": "freecodecamp",
      "created_at": "2015-01-14T03:36:47Z",
      "updated_at": "2016-09-17T05:00:52Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
      "profile_banner_background_color": null,
      "partner": false,
      "url": "https://www.twitch.tv/freecodecamp",
      "views": 161989,
      "followers": 10048,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/freecodecamp",
        "follows": "https://api.twitch.tv/kraken/channels/freecodecamp/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/freecodecamp",
        "subscriptions": "https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/freecodecamp/editors",
        "teams": "https://api.twitch.tv/kraken/channels/freecodecamp/teams",
        "videos": "https://api.twitch.tv/kraken/channels/freecodecamp/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/freecodecamp",
      "channel": "https://api.twitch.tv/kraken/channels/freecodecamp"
    }
  },
  {
    "stream": null,
    "display_name": "OgamingSC2",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/ogamingsc2",
      "channel": "https://api.twitch.tv/kraken/channels/ogamingsc2"
    }
  },
  {
    "stream": {
      "mature": false,
      "status": "RERUN: StarCraft 2 - Kane vs. HuK (ZvP) - WCS Season 3 Challenger AM - Match 4",
      "broadcaster_language": "en",
      "display_name": "ESL_SC2",
      "game": "StarCraft II",
      "language": "en",
      "_id": 30220059,
      "name": "esl_sc2",
      "created_at": "2012-05-02T09:59:20Z",
      "updated_at": "2016-09-17T06:02:57Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
      "profile_banner_background_color": "#050506",
      "partner": true,
      "url": "https://www.twitch.tv/esl_sc2",
      "views": 60843789,
      "followers": 135275,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/esl_sc2",
        "follows": "https://api.twitch.tv/kraken/channels/esl_sc2/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/esl_sc2",
        "subscriptions": "https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/esl_sc2/editors",
        "teams": "https://api.twitch.tv/kraken/channels/esl_sc2/teams",
        "videos": "https://api.twitch.tv/kraken/channels/esl_sc2/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "stream": null,
    "display_name": "noobs2ninjas",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "error": "Not Found",
    "status": 404,
    "message": "Channel 'not-a-valid-account' does not exist"
  }
];

// var channels = ['freecodecamp','cretetion','storbeck','comster404','OgamingSC2','esl_sc2','noobs2ninjas','brunofin'];

var channels = ['freecodecamp','OgamingSC2','esl_sc2','noobs2ninjas','brunofin'];

// var type = "streams";
// function update(channel) {
// 	$.ajax({
// 		url: 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + channel + '?callback=?',
// 		dataType: 'jsonp',
// 		success: function(json) {
// 			// console.log(json);
// 			updateChannels(json,channel);
// 		}
// 	});
// }

function updateChannels(json,channel) {
	// console.log(json);
	var identifier = '#'+channel;
	if (json.hasOwnProperty('error')) {
		// $(identifier).addClass('text-left');
		$(identifier).addClass('offline');
		$(identifier).attr('href', '#');
		$(identifier).append(channel);
		var html = '<p class="status-p text-center"><em>Does not exist</em></p>';
		$(identifier).append(html);
	}
	if (json.hasOwnProperty('stream')) {
		if (json.stream === null) {
			// console.log('https://www.twitch.tv/'+channel);
			$(identifier).addClass('offline');
			$(identifier).attr('href', 'https://www.twitch.tv/'+channel);
			$(identifier).attr('target', '_blank');
			// $(identifier).addClass('text-left');
			$(identifier).append(channel);
			var html = '<p class="status-p text-center"><em>Offline</em></p>';
			$(identifier).append(html);
			// $(identifier).html('Offline');
		}
		else {
			// console.log('https://www.twitch.tv/'+channel);
			$(identifier).addClass('online');
			$(identifier).attr('href', 'https://www.twitch.tv/'+channel);
			$(identifier).attr('target', '_blank');
			// $(identifier).addClass('text-left');
			$(identifier).append(channel);
			var html = '<p class="status-p text-center"><em>Online</em></p>';
			$(identifier).append(html);
			// console.log(json.stream.channel.status);
			// var status = '<p class="text-center description-p">'+json.stream.channel.status+'</p>';
			// 
			console.log(json.stream.status);
			var status = '<p class="text-center description-p">'+json.stream.status+'</p>';
			$(identifier).append(status);
			// $(identifier).html('Online');
		}
	}
}



$(document).ready(function() {
	for (var i=0; i<channels.length;i++) {
		updateChannels(jsonp[i],channels[i]);
	}
	$(".selector").click(function() {
		$(this).addClass('active');
		var status = $(this).attr('id');
        if (status === "all") {
            $(".online, .offline").removeClass("hidden");
        } else if (status === "online") {
            $(".online").removeClass("hidden");
            $(".offline").addClass("hidden");
        } else {
            $(".offline").removeClass("hidden");
            $(".online").addClass("hidden");
        }
	});
});