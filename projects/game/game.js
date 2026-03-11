let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function labStations() {
    clear();
    print("\You walked into the Culinary Arts classroom! Chef greets you and tells you to go change into your uniform.");
    print("\nHead to the changing rooms:" +
        "\n\tLocker Room");
	}
function lockerRoom() {
    clear();
    print("\nYou are in the locker room! You see some of your classmates and greet them. Then, you change into your uniform. Do not forget your hat and apron!");
    print("\nNow that you are changed, you go to wash your hands in the bathroom.");
    print("\nWalk to the bathroom. Take your apron before walking in." +
        "\n\tBathroom");
 }   
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            labStations();
    }
    waitForInput(processInput);
}
