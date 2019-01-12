// JavaScript function that wraps everything
$(document).ready(function () {

    var results;
    var wins = 0;
    var loss = 0;
    var tally = 0;

    var gems  = [
        '../unit-4-game/assets/images/tool1.gif',
        '../unit-4-game/assets/images/tool2.gif',
        '../unit-4-game/assets/images/tool3.gif',
        '../unit-4-game/assets/images/tool5.gif',
    ]
    // A master number is generated randomly
    var random_box = function() {
        $(".crystals").empty();
        random = Math.floor(Math.random() * 101) + 19;
        $(".random-num").text(random)

        // 4 divs are created with a random number generated for each div
        for (var i = 0; i < 4; i++) {
            var random_box = Math.floor(Math.random() * 12) + 1;
            console.log(random_box)

            var blocks = $("<div>");
            blocks.attr("class", "crystal");
            blocks.attr("random-number", random_box);
            blocks.css("background-image", "url(" + gems[i] + ")"); //url("../images/gem1.jpg")
            $(".crystals").append(blocks);
        }
        return random;
    }

    var game_reset = function() {
        var random = Math.floor(Math.random() * 101) + 19;
        $(".random-num").text(random)

        for (var i = 0; i < 4; i++) {
            var random_box = Math.floor(Math.random() * 12) + 1;
            console.log("" + random_box)
            $("random-number").text(random_box);
            // $('.crystal[random-number]="' + random_box + '"]') 
            // $(".crystal").attr("random-number", random_box)
        }
    };

    // Start of game
    random_box();
    $(".score").text(tally);
    $(document).on("click", ".crystal", function() {
        
        var current_number = parseInt($(this).attr("random-number"));
        console.log("current number: " + current_number)
        tally +=current_number
        $(".score").text(tally);
        console.log(tally);
        if (tally === random) {
            console.log("you win")
            tally = 0;
            wins += 1;
            $("#win").text(wins);
            $(".score").text(tally);
            random_box();
        }
        else if (tally > random) {
            console.log('you lose')
            tally = 0;
            loss += 1;
            $("#loss").text(loss);
            $(".score").text(tally);
            random_box();
        }
    });
})