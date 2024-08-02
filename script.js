// Function to get range for single subject
function getrange1()
{
    var aim = document.getElementById("inputGroupSelect01").value;
    if(aim==0)
    {
        alert("Please select a valid GPA");
        return false;
    }
    var marks = document.getElementById("subject").value;
    if(marks==NaN)
    {
        alert("Please enter CIE marks obtained");
        return false;
    }
    else if(marks<20||marks>50)
    {
        alert("Please enter valid CIE marks");
        return false;
    }
    if(aim>=7)
    {
        document.getElementById("result").style.display = "block";
        var laim=(aim*10)-10;
        var uaim=(aim*10)-1;
        var lr = (laim-marks)*2;
        var ur = (uaim-marks)*2;
        if(ur<35||lr>=100)
        {
            document.getElementById("range1").innerHTML = "Not possible";
        }
        else if(lr<35)
        {
            lr = 35;
            document.getElementById("range1").innerHTML = "Required Range for the subject is: " + lr + " - " + ur;
        }
        else
        {
            if (ur>100)
            {
                ur = 100;
            }
            document.getElementById("range1").innerHTML = "Required Range for the subject is: " + lr + " - " + ur;
        }
    }
    else if(aim==6) // Due to different calculation of range for GPA 6
    {
        document.getElementById("result").style.display = "block";
        var laim=55;
        var uaim=59;
        var lr = (laim-marks)*2;
        var ur = (uaim-marks)*2;
        if(ur<35||lr>=100)
        {
            document.getElementById("range1").innerHTML = "Not possible";
        }
        else if(lr<35)
        {
            lr = 35;
            document.getElementById("range1").innerHTML = "Required Range for the subject is: " + lr + " - " + ur;
        }
        else
        {
            if (ur>100)
            {
                ur = 100;
            }
            document.getElementById("range1").innerHTML = "Required Range for the subject is: " + lr + " - " + ur;
        }
    }
    else if(aim==5) // Due to different calculation of range for GPA 5
    {
        document.getElementById("result").style.display = "block";
        var laim=50;
        var uaim=54;
        var lr = (laim-marks)*2;
        var ur = (uaim-marks)*2;
        if(ur<35||lr>=100)
        {
            document.getElementById("range1").innerHTML = "Not possible";
        }
        else if(lr<35)
        {
            lr = 35;
            document.getElementById("range1").innerHTML = "Required Range for the subject is: " + lr + " - " + ur;
        }
        else
        {
            if (ur>100)
            {
                ur = 100;
            }
            document.getElementById("range1").innerHTML = "Required Range for the subject is: " + lr + " - " + ur;
        }
    }
    else // Due to different calculation of range for GPA 4
    {
        document.getElementById("result").style.display = "block";
        var laim=40;
        var uaim=49;
        var lr = (laim-marks)*2;
        var ur = (uaim-marks)*2;
        if(ur<35||lr>=100)
        {
            document.getElementById("range1").innerHTML = "Not possible";
        }
        else if(lr<35)
        {
            lr = 35;
            document.getElementById("range1").innerHTML = "Required Range for the subject is: " + lr + " - " + ur;
        }
        else
        {
            if (ur>100)
            {
                ur = 100;
            }
            document.getElementById("range1").innerHTML = "Required Range for the subject is: " + lr + " - " + ur;
        }
    }
}
// Function to clean the input fields
function cleansingle()
{
    document.getElementById("subject").value = "";
    document.getElementById("inputGroupSelect01").value = "0";
    document.getElementById("result").style.display = "none";
}
// Function to add rows dynamically based on number of subjects
function loadmodal()
{
    var subs = document.getElementById("subs").value;
    if(subs==NaN)
    {
        alert("Please enter the number of subjects");
        return false;
    }
    else if(subs<2||subs>10)
    {
        alert("Please enter valid number of subjects");
        return false;
    }
    var nummodal = bootstrap.Modal.getInstance(document.getElementById('multisub'));
    if(nummodal){
        nummodal.hide();
    }
    var modal = new bootstrap.Modal(document.getElementById('multiplesub'), {
        keyboard: false
    });
    modal.show();
    var loadsubs = document.getElementById("loadsubs");
    var p = document.createElement("p");
    p.innerHTML = "Enter the Overall CIE marks and desired GPA for each subject:";
    loadsubs.appendChild(p);
    for(var i=1;i<=subs;i++)
    {
        var sub = document.createElement("div");
        sub.className = "row mb-3";
        sub.innerHTML = "<p><u>Subject "+i+":</u></p><br>";
        sub.id = "sub"+i;
        loadsubs.appendChild(sub);
        var row = document.getElementById("sub"+i);
        var cie = document.createElement("div");
        cie.className = "col";
        cie.innerHTML = "<input type='number' class='form-control' placeholder='CIE Marks' min='20' max='50' maxlength='2' required>";
        cie.id = "cie"+i;
        row.appendChild(cie);
        var gpa = document.createElement("div");
        gpa.className = "col";
        gpa.innerHTML = "<select class='form-select' id='inputGroupSelect01'>"+
            "<option value='0' selected>GPA</option>"+
            "<option value='4'>4</option>"+
            "<option value='5'>5</option>"+
            "<option value='6'>6</option>"+
            "<option value='7'>7</option>"+
            "<option value='8'>8</option>"+
            "<option value='9'>9</option>"+
            "<option value='10'>10</option>"+"</select>"+"</div>";
        gpa.id = "gpa"+i;
        row.appendChild(gpa);
        var res = document.createElement("div");
        res.className = "col";
        res.innerHTML = "<input type='text' class='form-control' disabled>";
        res.id = "res"+i;
        row.appendChild(res);
    }
}
// Function to clean the input fields
function cleansub()
{
    document.getElementById("subs").value = "";
    var loadsubs = document.getElementById("loadsubs");
    while (loadsubs.firstChild) {
        loadsubs.removeChild(loadsubs.firstChild);
    }
    var nummodal = bootstrap.Modal.getInstance(document.getElementById('multiplesub'));
    if(nummodal){
        nummodal.hide();
    }
}
// Function to get range for multiple subjects
function getrange2()
{
    var subs = document.getElementById("subs").value;
    var flag = 0;
    var np = "Not possible";
    for(var i=1;i<=subs;i++)
    {
        var marks = document.getElementById("cie"+i).children[0].value;
        var aim = document.getElementById("gpa"+i).children[0].value;
        var res = document.getElementById("res"+i).children[0];
        if(aim==0)
        {
            alert("Please select a valid GPA for Subject "+i);
            flag = 1;
            break;
        }
        if(marks==NaN)
        {
            alert("Please enter CIE marks obtained for Subject "+i);
            flag = 1;
            break;
        }
        else if(marks<20||marks>50)
        {
            alert("Please enter valid CIE marks for Subject "+i);  
            flag = 1;
            break;
        }
    }
    for(var i=1;i<=subs;i++)
    {
        var marks = document.getElementById("cie"+i).children[0].value;
        var aim = document.getElementById("gpa"+i).children[0].value;
        var res = document.getElementById("res"+i).children[0];
        if(aim>=7 && flag==0)
        {
            var laim=(aim*10)-10;
            var uaim=(aim*10)-1;
            var lr = (laim-marks)*2;
            var ur = (uaim-marks)*2;
            if(ur<35||lr>=100)
            {
                res.disabled = false;
                res.value = np;
                res.disabled = true;
            }
            else if(lr<35)
            {
                lr = 35;
                res.disabled = false;
                res.value = lr + " - " + ur;
                res.disabled = true;
            }
            else
            {
                if (ur>100)
                {
                    ur = 100;
                }
                res.disabled = false;
                res.value = lr + " - " + ur;
                res.disabled = true;
            }
        }
        else if(aim==6 && flag==0) // Due to different calculation of range for GPA 6
        {
            var laim=55;
            var uaim=59;
            var lr = (laim-marks)*2;
            var ur = (uaim-marks)*2;
            if(ur<35||lr>=100)
            {
                res.disabled = false;
                res.value = np;
                res.disabled = true;
            }
            else if(lr<35)
            {
                lr = 35;
                res.disabled = false;
                res.value = lr + " - " + ur;
                res.disabled = true;
            }
            else
            {
                if (ur>100)
                {
                    ur = 100;
                }
                res.disabled = false;
                res.value = lr + " - " + ur;
                res.disabled = true;
            }
        }
        else if(aim==5 && flag==0) // Due to different calculation of range for GPA 5
        {
            var laim=50;
            var uaim=54;
            var lr = (laim-marks)*2;
            var ur = (uaim-marks)*2;
            if(ur<35||lr>=100)
            {
                res.disabled = false;
                res.value = np;
                res.disabled = true;
            }
            else if(lr<35)
            {
                lr = 35;
                res.disabled = false;
                res.value = lr + " - " + ur;
                res.disabled = true;
            }
            else
            {
                if (ur>100)
                {
                    ur = 100;
                }
                res.disabled = false;
                res.value = lr + " - " + ur;
                res.disabled = true;
            }
        }
        else if(flag==0) // Due to different calculation of range for GPA 4
        {
            var laim=40;
            var uaim=49;
            var lr = (laim-marks)*2;
            var ur = (uaim-marks)*2;
            if(ur<35||lr>=100)
            {
                res.disabled = false;
                res.value = np;
                res.disabled = true;
            }
            else if(lr<35)
            {
                lr = 35;
                res.disabled = false;
                res.value = lr + " - " + ur;
                res.disabled = true;
            }
            else
            {
                if (ur>100)
                {
                    ur = 100;
                }
                res.disabled = false;
                res.value = lr + " - " + ur;
                res.disabled = true;
            }
        }
    }
}
// Function to just clean the rows
function cleanrows()
{
    var loadsubs = document.getElementById("loadsubs");
    while (loadsubs.firstChild) {
        loadsubs.removeChild(loadsubs.firstChild);
    }
    var nummodal = bootstrap.Modal.getInstance(document.getElementById('multiplesub'));
    if(nummodal){
        nummodal.hide();
    }
}
