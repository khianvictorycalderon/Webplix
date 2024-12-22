function plainTagsReplacement() {
    // After generating the dynamic content, convert plain text tags into real HTML tags
    var chatOutputDiv = document.getElementById("ChatOutput");
    var content = chatOutputDiv.innerHTML;
    content = content.replace(/\[br\]/g, "<br>");
    content = content.replace(/\[hr\]/g, "<hr>");
    content = content.replace(/\[b\](.*?)\[\/b\]/g, "<b>$1</b>");
    content = content.replace(/\[i\](.*?)\[\/i\]/g, "<i>$1</i>");
    content = content.replace(/\[u\](.*?)\[\/u\]/g, "<u>$1</u>");
    content = content.replace(/\[ul\](.*?)\[\/ul\]/g, "<ul>$1</ul>");
    content = content.replace(/\[li\](.*?)\[\/li\]/g, "<li>$1</li>");
    content = content.replace(/\[a\s+href='([^']+)'\](.*?)\[\/a\]/g, '<a href="$1">$2</a>');
    chatOutputDiv.innerHTML = content;
}