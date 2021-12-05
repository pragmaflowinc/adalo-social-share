import { Platform } from 'react-native'
export const socialSites = {
  "add.this": (url) => "https://www.addthis.com/bookmark.php?url=" + url,
  blogger: (url, title, desc) => 
    "https://www.blogger.com/blog-this.g?u=" +
    url +
    "&n=" +
    title +
    "&t=" +
    desc,
  buffer: (text, url) => "https://buffer.com/add?text=" + text + "&url=" + url,
  diaspora: (title, url) =>  
    "https://share.diasporafoundation.org/?title=" + title + "&url=" + url,
  douban: (url, text) => "https://www.douban.com/recommend/?url=" + url + "&title=" + text,
  email: (email_address, title, desc) => "mailto:" + email_address + "?subject=" + title + "&body=" + desc,
  evernote: (url, text) =>
    "https://www.evernote.com/clip.action?url=" + url + "&title=" + text,
  getpocket: (url) => "https://getpocket.com/edit?url=" + url,
  facebook: (url, text) => Platform.OS === 'android' || Platform.OS === 'ios' ? "fb" : "https" + "://www.facebook.com/sharer/sharer.php?u=" + url + "&quote=" + text,
  flattr: (user_id, url, title, text, language, hash_tags, category) =>
    "https://flattr.com/submit/auto?user_id=" +
    user_id +
    "&url=" +
    url +
    "&title=" +
    title +
    "&description=" +
    text +
    "&language=" +
    language +
    "&tags=" +
    hash_tags +
    "&hidden=HIDDEN&category=" +
    category,
  flipboard: (text, url) =>
    "https://share.flipboard.com/bookmarklet/popout?v=2&title=" +
    text +
    "&url=" +
    url,
  gmail: (email_address, title, url, bcc_email_address, cc_email_address) =>
    "https://mail.google.com/mail/?view=cm&to=" +
    email_address +
    "&su=" +
    title +
    "&body=" +
    url +
    "&bcc=" +
    bcc_email_address +
    "&cc=" +
    cc_email_address,
  "google.bookmarks": (url, title, text, hash_tags) =>
    "https://www.google.com/bookmarks/mark?op=edit&bkmk=" +
    url +
    "&title=" +
    title +
    "&annotation=" +
    text +
    "&labels=" +
    hash_tags +
    "",
  instapaper: (url, title, desc) =>
    "https://www.instapaper.com/edit?url=" +
    url +
    "&title=" +
    title +
    "&description=" +
    desc,
  "line.me": (url, text) => "https://lineit.line.me/share/ui?url=" + url + "&text=" + text,
  linkedin: (url) =>
    "https://www.linkedin.com/sharing/share-offsite/?url=" +
    url,
  livejournal: (url, text) =>
    "https://www.livejournal.com/update.bml?subject=" +
    text +
    "&event=" +
    url,
  "hacker.news": (url, title) =>
    "https://news.ycombinator.com/submitlink?u=" + url + "&t=" + title,
  "ok.ru": (url) =>
    "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=" + url,
  pinterest: (url) => "https://pinterest.com/pin/create/button/?url=" + url,
  qzone: (url) =>
    "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + url,
  reddit: (url, title) => "https://reddit.com/submit?url=" + url + "&title=" + title,
  renren: (url, text, desc) =>
    "https://widget.renren.com/dialog/share?resourceUrl=" +
    url +
    "&srcUrl=" +
    url +
    "&title=" +
    text +
    "&description=" +
    desc,
  skype: (url, text) => "https://web.skype.com/share?url=" + url + "&text=" + text,
  sms: (phone_number, text) => "sms:" + phone_number + "?body=" + text,
  "telegram.me": (url, text, phone_number) =>
    "https://t.me/share/url?url=" +
    url +
    "&text=" +
    text +
    "&to=" +
    phone_number,
  threema: (text, user_id) => "threema://compose?text=" + text + "&id=" + user_id,
  tumblr: (url, title, desc, hash_tags) =>
    "https://www.tumblr.com/widgets/share/tool?canonicalUrl=" +
    url +
    "&title=" +
    title +
    "&caption=" +
    desc +
    "&tags=" +
    hash_tags,
  twitter: (url, text, via, hash_tags) =>
    "https://twitter.com/intent/tweet?url=" +
    url +
    "&text=" +
    text +
    "&via=" +
    via +
    "&hashtags=" +
    hash_tags,
  vk: (url, title, desc) =>
    "https://vk.com/share.php?url=" +
    url +
    "&title=" +
    title +
    "&comment=" +
    desc,
  weibo: (url, title) =>
    "https://service.weibo.com/share/share.php?url=" +
    url +
    "&appkey=&title=" +
    title +
    "&pic=&ralateUid=",
  whatsapp: (phone_number, text) =>
    "https://wa.me/" + phone_number + "?text=" + text,
  xing: (url) => "https://www.xing.com/spi/shares/new?url=" + url,
  yahoo: (email_address, title, text) =>
    "https://compose.mail.yahoo.com/?to=" +
    email_address +
    "&subject=" +
    title +
    "&body=" +
    text
}