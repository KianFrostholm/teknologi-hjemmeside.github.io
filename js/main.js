$(function(){

    let config = {
        Webhook: "https://discord.com/api/webhooks/1019131570398957591/hZ4uiKa8P_bOfp0MH-WXQs8Fn8z1Gs5TtQNMUOrEEh5w4gSN12TMkg8HBdnZ4F0nPKa1",
        avatar: "https://cdn.discordapp.com/icons/860490598547980318/0497463025c2999aa2d1e127853feb77.webp?size=160",
    }

    
    $("#insert1").click(function(e){
        e.preventDefault();

        const rapport1 = $("#rapport1").val();
        const rapport2 = $("#rapport2").val();
        const rapport3 = $("#rapport3").val();
        const rapport4 = $("#rapport4").val();
        const rapport5 = $("#rapport5").val();
        const rapport6 = $("#rapport6").val();
        const rapport7 = $("#rapport7").val();
        const rapport8 = $("#rapport8").val();
        const rapport9 = $("#rapport9").val();
        const rapport10 = $("#rapport10").val();
        const rapport11 = $("#rapport11").is(':checked');
        const rapport12 = $("#rapport12").is(':checked');
        const rapport13 = $("#rapport13").is(':checked');

        if(rapport1 == "" || rapport2 == "" || rapport3 == "" || rapport4 == "" || rapport5 == "" || rapport6 == "" || rapport7 == "" || rapport8 == "" || rapport9 == "" || rapport10 == ""){
            $.notify("Udfyld Alle Felter!", "error");
        } else {
            $.notify("Din rapport er Sendt!", "success");

            const message = `**Ny Rapport**\n\n**Email**\n${rapport1}\n\n**Model**\n${rapport2}\n\n**Købs dato**\n${rapport3}\n\n**Hvilken garanti er købt med på produktet**\n${rapport4}\n\n**Hvad skal repareres**\n${rapport5}\n\n**Hvor opstår problemet**\n${rapport6}\n\n**Spørgsmål?u?**\n${rapport7}\n\n**Spørgsmål?**\n${rapport8}\n\n**Spørgsmål?**\n${rapport9}\n\n**Spørgsmål?**\n${rapport10}\n\n**Spørgsmål?**\n${rapport11}\n\n**Spørgsmål?**\n${rapport12}\n\n**Spørgsmål?**\n${rapport13}\n\n`;

            $.post(config.Webhook, { content: message, username: "MyRepair - Rapport", avatar_url: avatar });

            setTimeout(() => {
                window.location.href = '../index.html';
            }, 2000)
        }
    })

})
