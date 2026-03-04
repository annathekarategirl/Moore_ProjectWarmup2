function describeRoom(room){
    switch(room){
        case "hallway":
            return "The floors of this liminal space creek with every step."
            break;
        case "sink":
            return "The sink is dirty, probably filled with lead"
            break;
        case "stairwell":
            return "I wonder what's upstairs"
            break;
        case "bedroom":
            return "A trenchcoat hangs on the wall by the bed... postal dude?"
            break;
        default:
            return "Probably not the loveliest place to be right now..."
    }
}

const exampleNode = {image: '/images/hallway.jpg', txt:"The floors of this liminal space creek with every step.",choices:["Walk further down the hall","Kick down a door for funsies","Stay where you are"]
}