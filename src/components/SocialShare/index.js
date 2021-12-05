import React from "react";
import { Platform, View, Linking } from "react-native";
import { Button } from "@protonapp/react-native-material-ui";
import { socialSites } from "./social-config";
const SocialShare = (props) => {
  const {
    styles,
    label = "",
    backgroundColor,
    icon,
    _height = 36,
    _width = 160,
    notSupported,
    socialSite,
    url,
    title,
    text,
    desc,
    via,
    hashtags,
    language,
    userid,
    category,
    phonenumber,
    emailaddress,
    cemailaddress,
    bccemailaddress,
		openUrl
  } = props;
  
  const onShare = async () => {
    let theLink = "";
    switch (socialSite) {
      case "add.this":
        theLink = socialSites[socialSite](url);
        break;
      case "blogger":
        theLink = socialSites[socialSite](text, url);
        break;
      case "buffer":
        theLink = socialSites[socialSite](title, url);
        break;
      case "diaspora":
        theLink = socialSites[socialSite](url, text);
        break;
      case "douban":
        theLink = socialSites[socialSite](emailaddress, title, desc);
        break;
      case "email":
        theLink = socialSites[socialSite](emailaddress, title, desc);
        break;
      case "evernote":
        theLink = socialSites[socialSite](url, text);
        break;
      case "getpocket":
        theLink = socialSites[socialSite](url);
        break;
      case "facebook":
        theLink = socialSites[socialSite](url, text);
        break;
      case "flattr":
        theLink = socialSites[socialSite](
          userid,
          url,
          title,
          text,
          language,
          hashtags,
          category
        );
        break;
      case "flipboard":
        theLink = socialSites[socialSite](text, url);
        break;
      case "gmail":
        theLink = socialSites[socialSite](
          emailaddress,
          title,
          url,
          bccemailaddress,
          cemailaddress
        );
        break;
      case "google.bookmarks":
        theLink = socialSites[socialSite](url, title, text, hashtags);
        break;
      case "hacker.news":
        theLink = socialSites[socialSite](url, title);
        break;
      case "instapaper":
        theLink = socialSites[socialSite](url, title, desc);
        break;
      case "line.me":
        theLink = socialSites[socialSite](url, text);
        break;
      case "linkedin":
        theLink = socialSites[socialSite](url);
        break;
      case "livejournal":
        theLink = socialSites[socialSite](url, text);
        break;
      case "ok.ru":
        theLink = socialSites[socialSite](url);
        break;
      case "pinterest":
        theLink = socialSites[socialSite](url);
        break;
      case "qzone":
        theLink = socialSites[socialSite](url);
        break;
      case "reddit":
        theLink = socialSites[socialSite](url, title);
        break;
      case "renren":
        theLink = socialSites[socialSite](url, text, desc);
        break;
      case "skype":
        theLink = socialSites[socialSite](url, text);
        break;
      case "sms":
        theLink = socialSites[socialSite](phonenumber, text);
        break;
      case "telegram.me":
        theLink = socialSites[socialSite](url, text, phonenumber);
        break;
      case "threema":
        theLink = socialSites[socialSite](text, userid);
        break;
      case "tumblr":
        theLink = socialSites[socialSite](url, title, desc, hashtags);
        break;
      case "twitter":
        theLink = socialSites[socialSite](url, text, via, hashtags);
        break;
      case "vk":
        theLink = socialSites[socialSite](url, title, desc);
        break;
      case "weibo":
        theLink = socialSites[socialSite](url, title);
        break;
      case "whatsapp":
        theLink = socialSites[socialSite](phonenumber, text);
        break;
      case "xing":
        theLink = socialSites[socialSite](url);
        break;
      case "yahoo":
        theLink = socialSites[socialSite](emailaddress, title, text);
        break;
    }
			if (openUrl) {
				openUrl(theLink)
			} else {
				try {
					await Linking.openURL(theLink)
				} catch {
					if (notSupported) {
						notSupported();
					}
				}
			}
  };
  return (
    <View>
      <Button
        icon={icon}
        text={label}
        style={{
          container: {
            backgroundColor: backgroundColor,
            height: _height,
            width: _width,
          },
          text: {
            color:
              styles && styles.titleStyles
                ? styles.titleStyles.color
                : undefined,
            fontFamily:
              styles && styles.titleStyles ? titleStyles.fontFamily : undefined,
            fontSize:
              styles && styles.titleStyles
                ? styles.titleStyles.fontSize
                : undefined,
            fontWeight:
              styles && styles.titleStyles
                ? styles.titleStyles.fontWeight
                : undefined,
          },
        }}
        onPress={onShare}
      ></Button>
    </View>
  );
};

export default SocialShare;
