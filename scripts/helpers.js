function log(message)
{
    var error_log = document.getElementById("error_log");
    if (!error_log)
    {
        console.log(message);
    }
    else
    {
        message = message.replace("\n","<br />");
        message = message.replace("\r","<br />");
        error_log.innerHTML = error_log.innerHTML + "<br />" + message;
    }
}
