


    $("#submit-form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwUyybHoHV_e8Ph77ZY2-amqLYgm4N4KOLajBqNiBKufSFemgRHcm_6Ua1Qw7-lLZtw/exec",
            data:$("#submit-form").serialize(),
            method:"get",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    })