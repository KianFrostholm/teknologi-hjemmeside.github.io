$(function(){

    let config = {
        cfx: "le6gq5",
        policewebhook: "https://discord.com/api/webhooks/1019131570398957591/hZ4uiKa8P_bOfp0MH-WXQs8Fn8z1Gs5TtQNMUOrEEh5w4gSN12TMkg8HBdnZ4F0nPKa1",
        emswebhook: "https://discord.com/api/webhooks/1019131570398957591/hZ4uiKa8P_bOfp0MH-WXQs8Fn8z1Gs5TtQNMUOrEEh5w4gSN12TMkg8HBdnZ4F0nPKa1",
        mechanicwebhook: "https://discord.com/api/webhooks/1019131570398957591/hZ4uiKa8P_bOfp0MH-WXQs8Fn8z1Gs5TtQNMUOrEEh5w4gSN12TMkg8HBdnZ4F0nPKa1",
        lawyerwebhook: "https://discord.com/api/webhooks/1019131570398957591/hZ4uiKa8P_bOfp0MH-WXQs8Fn8z1Gs5TtQNMUOrEEh5w4gSN12TMkg8HBdnZ4F0nPKa1",
        gangwebhook: "https://discord.com/api/webhooks/1019131570398957591/hZ4uiKa8P_bOfp0MH-WXQs8Fn8z1Gs5TtQNMUOrEEh5w4gSN12TMkg8HBdnZ4F0nPKa1",
        staffwebhook: "https://discord.com/api/webhooks/1019131570398957591/hZ4uiKa8P_bOfp0MH-WXQs8Fn8z1Gs5TtQNMUOrEEh5w4gSN12TMkg8HBdnZ4F0nPKa1",
        unbanwebhook: "https://discord.com/api/webhooks/1019131570398957591/hZ4uiKa8P_bOfp0MH-WXQs8Fn8z1Gs5TtQNMUOrEEh5w4gSN12TMkg8HBdnZ4F0nPKa1",
        ckwebhook: "https://discord.com/api/webhooks/1019131570398957591/hZ4uiKa8P_bOfp0MH-WXQs8Fn8z1Gs5TtQNMUOrEEh5w4gSN12TMkg8HBdnZ4F0nPKa1",
    }

    
    $("#insert1").click(function(e){
        e.preventDefault();

        const police1 = $("#police1").val();
        const police2 = $("#police2").val();
        const police3 = $("#police3").val();
        const police4 = $("#police4").val();
        const police5 = $("#police5").val();
        const police6 = $("#police6").val();
        const police7 = $("#police7").val();
        const police8 = $("#police8").val();
        const police9 = $("#police9").val();
        const police10 = $("#police10").val();
        const police11 = $("#police11").is(':checked');
        const police12 = $("#police12").is(':checked');
        const police13 = $("#police13").is(':checked');

        if(police1 == "" || police2 == "" || police3 == "" || police4 == "" || police5 == "" || police6 == "" || police7 == "" || police8 == "" || police9 == "" || police10 == ""){
            $.notify("Udfyld Alle Felter!", "error");
        } else {
            $.notify("Din rapport er Sendt!", "success");

            const message = `**Ny Rapport**\n\n**Email**\n${police1}\n\n**Model**\n${police2}\n\n**Købs dato**\n${police3}\n\n**Hvilken garanti er købt med på produktet**\n${police4}\n\n**Hvad skal repareres**\n${police5}\n\n**Hvor opstår problemet**\n${police6}\n\n**Spørgsmål?u?**\n${police7}\n\n**Spørgsmål?**\n${police8}\n\n**Spørgsmål?**\n${police9}\n\n**Spørgsmål?**\n${police10}\n\n**Spørgsmål?**\n${police11}\n\n**Spørgsmål?**\n${police12}\n\n**Spørgsmål?**\n${police13}\n\n`;

            $.post(config.policewebhook, { content: message, username: "MyRepair - Rapport" });

            setTimeout(() => {
                window.location.href = '../index.html';
            }, 2000)
        }
    })

    $("#insert2").click(function(e){
        e.preventDefault();

        const ems1 = $("#ems1").val();
        const ems2 = $("#ems2").val();
        const ems3 = $("#ems3").val();
        const ems4 = $("#ems4").val();
        const ems5 = $("#ems5").val();
        const ems6 = $("#ems6").val();
        const ems7 = $("#ems7").val();
        const ems8 = $("#ems8").is(':checked');

        if(ems1 == "" || ems2 == "" || ems3 == "" || ems4 == "" || ems5 == "" || ems6 == "" || ems7 == ""){
            $.notify("Udfyld Alle Felter!", "error");
        } else {
            $.notify("Din rapport er Sendt!", "success");

            const message = `**Ny Rapport**\n\n**Email**\n${ems1}\n\n**Model**\n${ems2}\n\n**Købs dato**\n${ems3}\n\n**Hvilken garanti er købt med på produktet**\n${ems4}\n\n**Hvad skal repareres**\n${ems5}\n\n**Hvor opstår problemet**\n${ems6}\n\n**Spørgsmål?u?**\n${ems7}\n\n**Spørgsmål?**\n${ems8}\n\n`;

            $.post(config.emswebhook, { content: message, username: "Læge Ansøgning" });

            setTimeout(() => {
                window.location.href = '../index.html';
            }, 2000)
        }
    })

    $("#insert3").click(function(e){
        e.preventDefault();

        const mechanic1 = $("#mechanic1").val();
        const mechanic2 = $("#mechanic2").val();
        const mechanic3 = $("#mechanic3").val();
        const mechanic4 = $("#mechanic4").val();
        const mechanic5 = $("#mechanic5").val();
        const mechanic6 = $("#mechanic6").val();
        const mechanic7 = $("#mechanic7").val();

        if(mechanic1 == "" || mechanic2 == "" || mechanic3 == "" || mechanic4 == "" || mechanic5 == "" || mechanic6 == "" || mechanic7 == ""){
            $.notify("Udfyld Alle Felter!", "error");
        } else {
            $.notify("Din rapport er Sendt!", "success");

            const message = `**Ny Rapport**\n\n**Email**\n${mechanic1}\n\n**Model**\n${mechanic2}\n\n**Købs dato**\n${mechanic3}\n\n**Hvilken garanti er købt med på produktet**\n${mechanic4}\n\n**Hvad skal repareres**\n${mechanic5}\n\n**Hvor opstår problemet**\n${mechanic6}\n\n**Spørgsmål?u?**\n${mechanic7}\n\n`;
            
            $.post(config.mechanicwebhook, { content: message, username: "Mekaniker Ansøgning" });

            setTimeout(() => {
                window.location.href = '../index.html';
            }, 2000)
        }
    })

    $("#insert4").click(function(e){
        e.preventDefault();

        const lawyer1 = $("#lawyer1").val();
        const lawyer2 = $("#lawyer2").val();
        const lawyer3 = $("#lawyer3").val();
        const lawyer4 = $("#lawyer4").val();
        const lawyer5 = $("#lawyer5").val();
        const lawyer6 = $("#lawyer6").val();
        const lawyer7 = $("#lawyer7").val();
        const lawyer8 = $("#lawyer8").val();

        if(lawyer1 == "" || lawyer2 == "" || lawyer3 == "" || lawyer4 == "" || lawyer5 == "" || lawyer6 == "" || lawyer7 == "" || lawyer8 == ""){
            $.notify("Udfyld Alle Felter!", "error");
        } else {
            $.notify("Din rapport er Sendt!", "success");

            const message = `**Ny Rapport**\n\n**Email**\n${lawyer1}\n\n**Model**\n${lawyer2}\n\n**Købs dato**\n${lawyer3}\n\n**Hvilken garanti er købt med på produktet**\n${lawyer4}\n\n**Hvad skal repareres**\n${lawyer5}\n\n**Hvor opstår problemet**\n${lawyer6}\n\n**Spørgsmål?u?**\n${lawyer7}\n\n**Spørgsmål?**\n${lawyer8}\n\n`;
            
            
            
            $.post(config.lawyerwebhook, { content: message, username: "Advokat Ansøgning" });

            setTimeout(() => {
                window.location.href = '../index.html';
            }, 2000)
        }
    })

    $("#insert5").click(function(e){
        e.preventDefault();

        const gang1 = $("#gang1").val();
        const gang2 = $("#gang2").val();
        const gang3 = $("#gang3").val();
        const gang4 = $("#gang4").val();
        const gang5 = $("#gang5").val();
        const gang6 = $("#gang6").val();
        const gang7 = $("#gang7").val();

        if(gang1 == "" || gang2 == "" || gang3 == "" || gang4 == "" || gang5 == "" || gang6 == "" || gang7 == ""){
            $.notify("Udfyld Alle Felter!", "error");
        } else {
            $.notify("Din rapport er Sendt!", "success");;

            const message = `**Ny Rapport**\n\n**Email**\n${gang1}\n\n**Model**\n${gang2}\n\n**Købs dato**\n${gang3}\n\n**Hvilken garanti er købt med på produktet**\n${gang4}\n\n**Hvad skal repareres**\n${gang5}\n\n**Hvor opstår problemet**\n${gang6}\n\n**Spørgsmål?u?**\n${gang7}\n\n`;

        
            $.post(config.gangwebhook, { content: message, username: "Bande Ansøgning" });

            setTimeout(() => {
                window.location.href = '../index.html';
            }, 2000)
        }
    })

    $("#insert6").click(function(e){
        e.preventDefault();

        const staff1 = $("#staff1").val();
        const staff2 = $("#staff2").val();
        const staff3 = $("#staff3").val();
        const staff4 = $("#staff4").val();
        const staff5 = $("#staff5").val();
        const staff6 = $("#staff6").val();
        const staff7 = $("#staff7").val();
        const staff8 = $("#staff8").val();
        const staff9 = $("#staff9").val();
        const staff10 = $("#staff10").val();
        const staff11 = $("#staff11").val();
        const staff12 = $("#staff12").val();

        if(staff1 == "" || staff2 == "" || staff3 == "" || staff4 == "" || staff5 == "" || staff6 == "" || staff7 == "" || staff8 == "" || staff9 == "" || staff10 == "" || staff11 == "" || staff12 == ""){
            $.notify("Udfyld Alle Felter!", "error");
        } else {
            $.notify("Din rapport er Sendt!", "success");

            const message = `**Ny Rapport**\n\n**Email**\n${staff1}\n\n**Model**\n${staff2}\n\n**Købs dato**\n${staff3}\n\n**Hvilken garanti er købt med på produktet**\n${staff4}\n\n**Hvad skal repareres**\n${staff5}\n\n**Hvor opstår problemet**\n${staff6}\n\n**Spørgsmål?u?**\n${staff7}\n\n**Spørgsmål?**\n${staff8}\n\n**Spørgsmål?**\n${staff9}\n\n**Spørgsmål?**\n${staff10}\n\n**Spørgsmål?**\n${staff11}\n\n**Spørgsmål?**\n${staff12}\n\n**Spørgsmål?**\n\n`;
    
            $.post(config.staffwebhook, { content: message, username: "Staff Ansøgning" });

            setTimeout(() => {
                window.location.href = '../index.html';
            }, 2000)
        }
    })

    $("#insert7").click(function(e){
        e.preventDefault();

        const unban1 = $("#unban1").val();
        const unban2 = $("#unban2").val();
        const unban3 = $("#unban3").val();
        const unban4 = $("#unban4").val();
        const unban5 = $("#unban5").val();
        const unban6 = $("#unban6").val();

        if(unban1 == "" || unban2 == "" || unban3 == "" || unban4 == "" || unban5 == "" || unban6 == ""){
            $.notify("Udfyld Alle Felter!", "error");
        } else {
            $.notify("Din rapport er Sendt!", "success");

            const message = `**Ny Ansøgning**\n\n**Discord navn og tag (F.eks Unknown#1824)**\n${unban1}\n\n**ID**\n${unban2}\n\n**>Hvorfor vil du have unban?**\n${unban3}\n\n**Hvem gav dig ban?**\n${unban4}\n\n**Har du lært af dine fejl?**\n${unban5}\n\n**Hvorfor fik du ban?**\n${unban6}\n\n`;
    
            $.post(config.unbanwebhook, { content: message, username: "Unban Ansøgning" });

            setTimeout(() => {
                window.location.href = '../index.html';
            }, 2000)
        }
    })

    $("#insert8").click(function(e){
        e.preventDefault();

        const ck1 = $("#ck1").val();
        const ck2 = $("#ck2").val();
        const ck3 = $("#ck3").val();
        const ck4 = $("#ck4").val();
        const ck5 = $("#ck5").val();
        const ck6 = $("#ck6").val();

        if(ck1 == "" || ck2 == "" || ck3 == "" || ck4 == "" || ck5 == "" || ck6 == ""){
            $.notify("Udfyld Alle Felter!", "error");
        } else {
            $.notify("Din rapport er Sendt!", "success");

            const message = `**Ny Ansøgning**\n\n**Discord navn og tag (F.eks Unknown#1824)**\n${ck1}\n\n**Hvem vil du gerne CK?**\n${ck2}\n\n**Dit ID og personen du vil CK's id**\n${ck3}\n\n**Video på CK (link)**\n${ck4}\n\n**Hvorfor vil du gerne CK/PK personen?**\n${ck5}\n\n**Hvad får du ud af at CK/PK personen?**\n${ck6}\n\n`;
    
            $.post(config.ckwebhook, { content: message, username: "CK Ansøgning" });

            setTimeout(() => {
                window.location.href = '../index.html';
            }, 2000)
        }
    })

})
