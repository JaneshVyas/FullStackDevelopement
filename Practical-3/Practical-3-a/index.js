function switchColor() {
    var head1=document.getElementById("head1");
    var head2=document.getElementById("head2");
    setInterval(function() {
        let col2;
        if(head1.style.color == "red") {
            var col1="blue";
        }
        else {
            col1="red";
        }
        if(head2.style.color == "blue") {
            col2="red";
        }
        else {
            col2="blue";
        }
        head1.style.color=col1;
        head2.style.color=col2;
    }, 1000);
}