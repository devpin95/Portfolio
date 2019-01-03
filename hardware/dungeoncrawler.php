<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />

<link rel="stylesheet" type="text/css" href="../css/base.css">
<link rel="stylesheet" type="text/css" href="css/dungeoncrawler.css">

<?php include '../headerFiles.php'; ?>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<!--Lightbox plugin-->
<script src="../js/lightbox.js"></script>
<script src="../js/popupJS.js"></script>
<link rel="stylesheet" type="text/css" href="../css/lightboxStyle.css">

<title>Devin Piner | Web Designs</title>

</head>

<body>
<div class="content">
    
    	<?php include "../header.php"; ?>
        
        <!--Body-->
        <main>    
                           
			<!--Game-->
            <div class="videoWrapper">
    			<iframe width="100%" height="100%" src="https://www.youtube.com/embed/fdKqrFvP83I" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <span class="caption">Playthough by Kevin MacFarlane</span> 
            
            <!--Game Info-->
            <span class="sectionHeader">1-Dimensional Dungeon Crawler</span>	
        
        	<div class="siteDescription">
                <br>
                <p class="info">Google Document: <a href="https://docs.google.com/document/d/19n78N6au7jcnkBOKRLRWcH9MYb9kkZV1jP_cvl5nrdE/edit?usp=sharing" target="_blank">Dungeon Crawler Design Document</a></p>
                <p class="info">GitHub Repository: <a href="https://github.com/devpin95/DungeonCrawler" target="_blank">https://github.com/devpin95/DungeonCrawler</a></p>
                <p class="info">Contributors: <a href="https://github.com/BeardedWookiee" target="_blank">Kevin MacFarlane</a>, Devin Piner</p>

                <h1>Introduction</h1>
                <h2>System</h2>

                <p class="firstPara">This is a 1-dimensional dungeon crawler game that utilizes a 5 meter long LED strip, and a unique controller. The strip consists of 300 individually addressable LEDs which are used to display the game state. The player can tilt the controller to move the player object on the strip, and he can flick/shake the controller to attack. It was inspired by two other projects: Line Wobbler and Twang (we made sure to ignore any code that we found on these examples, and build it completely from scratch).</p>

                <p>The game consists of the player, two different enemy types, three different environment types, and a boss for the final level. We use different combinations of these objects to build our levels.</p>

                <p>In this report we will discuss the individual contributions, how we tested the game,  the game design, the hardware that we used and why we chose to use it, and the software implementation and why we designed it that way.</p>

                <!-- BLAME ------------------------------------------------------------------ -->
                <!-- ------------------------------------------------------------------------------------ -->
                <h2>Contributions (Blame)</h2>
                <strong>Devin Piner</strong>
                <ul>
                    <li>Entity class design and implementation</li>
                    <li>Game Piece implementation (Player, Enemy, Patroller, Lava, Wind, FlowingLava)</li>
                    <li>Basic game-logic structure (Main Game Loop)</li>
                    <li>JSON-to-array helper program (Memory management)</li>
                    <li>System design (Entity pools, basic collision detection, levels implementation)</li>
                    <li>BigBoi Boss design, basic logic and animation, and global variables access</li>
                </ul>
                <br/>
                <strong>Kevin MacFarlane</strong>
                <ul>
                    <li>Game logic and design</li>
                    <li>Design and 3D-print the housing and other components</li>
                    <li>Soldering longer wires to the LED strip</li>
                    <li>Make an existing power supply work with the project</li>
                    <li>Assembly of everything</li>
                    <li>System design</li>
                    <li>Level struct</li>
                    <li>Gyroscope + Accelerometer detection and control</li>
                    <li>General code tweaking and idea generation</li>
                    <li>Presentation</li>
                </ul>

                <br>

                <!-- TESTING ------------------------------------------------------------------ -->
                <!-- ------------------------------------------------------------------------------------ -->
                <h2>Testing</h2>
                <p class="firstPara">As with any project, testing was an important task integrated throughout the process to ensure issues would be minimized as progress was made. We began by thoroughly designing systems before implementing them so that logic was well established and less likely to change. Through testing we were able to refine our ideas to handle issues in implementation and integration with other systems. Along with this, we took iterative steps in implementation and tested them to guarantee their functionality worked as intended. We repeated this process whenever a system did not meet our requirements or did not function in a satisfactory manner. For example, movement of the player via the accelerometer is an important function of our game. After our initial testing, we found it cumbersome and confusing. We tweaked our code and found a setting that felt more accurate and satisfying. The most notable ways that we tested the system were through trial and error, and by getting other people to play the game.</p>

                <strong>Trial and Error</strong>
                <p class="firstPara">Starting from the beginning of this project, every time a new game mechanic, object, or hardware was introduced, we would test to make sure that it was working as expected. If something didn’t work, we slowly retraced our steps to see what the cause of the issue was.</p>

                <strong>Playtesters</strong>
                <p class="firstPara">When we were comfortable with a level, or how certain aspects of the game were working, we would get an external person to play the game. This allowed us to see if we needed to change anything in terms of understanding how to play, to make levels easier or harder, and if there were any unexpected bugs that arose. Using people other than us to test gave insight into what was intuitive for the player and what was something we overlooked. Many bugs were found and solved using this method.</p>

                <p>For images of the system please see Appendix A.</p>

                <!-- DESIGN ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
                <!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
                <!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

                <h1>Game Design</h1>
                <p class="firstPara">The game has a player, two enemy types, three environment types, and a boss.</p>

                <!-- PLAYER ------------------------------------------------------------------ -->
                <!-- ------------------------------------------------------------------------------------ -->
                <h2>Player</h2>
                <p class="firstPara">The player has a length of one LED and is colored green. It has only two actions it can perform in the game: move and attack. We wanted to ensure that the player wasn’t overly complex to control, so the game is easy for people to learn.</p>

                <strong>Move</strong>
                <p class="firstPara">The player can move forwards and backwards. There are 3 speeds that it can achieve depending on how far the player tilts the sensor.</p>

                <strong>Attack</strong>
                <p class="firstPara">The player can only initiate an attack when he is green. Being green indicates that the player is ready to attack. The player will attack in a range of 5 LEDs. To show that the player is attacking, we change the color of these LEDs to purple.</p>

                <p>Initially, the player could keep attacking with no delay between attacks. After testing this, we found that levels became too easy. A reload mechanic was then added to the player. What this does is add a delay after the player has attacked. This prevents the player from attacking again until the delay is over.</p>

                Essentially what happens is the following sequence of events:
                <ol>
                    <li>Player (single green LED) will attack</li>
                    <li>5 LEDs light up in purple at the player location (indicating an attack) for a short time</li>
                    <li>The LEDs turn blank and reveal the player location again (a single purple LED)</li>
                    <li>The player will not be able to attack while the LED is purple</li>
                    <li>After a short delay, the player turns green again (indicating he is ready to attack)</li>
                </ol>

                <br>

                <strong>Death</strong>
                <p class="firstPara">When the player dies, we needed to have a visual indication of the updated game state. We decided to make the player “explode” and spread green over 20 LEDs. This shows the player that he has just died and will need to restart the level.</p>

                <!-- ENEMIES ------------------------------------------------------------------ -->
                <!-- ------------------------------------------------------------------------------------ -->
                <h2>Enemies</h2>
                <p class="firstPara">There are two main enemy types which are both red. Having slightly different enemies adds some variety in the game so that levels aren’t repetitive. All enemies can be killed by the player if the player hits them with an attack. If they move into the same space as the player (while the player is not attacking), then they will kill the player.</p>

                <strong>Standard Enemy</strong>
                <p class="firstPara">This enemy moves towards the player.</p>

                <strong>Patroller Enemy</strong>
                <p class="firstPara">This enemy moves back and forth over a set range.</p>

                <!-- ENVIRONMENT ------------------------------------------------------------------ -->
                <!-- ------------------------------------------------------------------------------------ -->
                <h2>Environment</h2>
                <p class="firstPara">There are currently three environment types in the game - Wind, Lava, and flowing Lava. Wind is blue while lava is orange. All of these are used to affect the player in some way while enemies will be unaffected.</p>

                <strong>Wind</strong>
                <p class="firstPara">Wind is used to push the player in a certain direction. It won’t prevent them from moving back, but it will alter the players movement speed. If the player moves in the same direction that the wind is blowing, they will move faster than what is normal. If the player moves against the wind, they will move slower than normal.</p>

                <strong>Lava</strong>
                <p class="firstPara">The lava cycles between being active and inactive. If the lava is inactive, the player can move through it without dying. If the lava is active, then the player cannot move through it. If he does, he will die and will have to restart the level.</p>

                <strong>Flowing Lava</strong>
                <p class="firstPara">This lava type starts at the beginning of the board, just before the player. It progressively gets larger as time passes. This gives the player a sense of dread and urgency because, if they waste time initially, they will get hit by the lava and will have to restart the level.</p>

                <!-- BOSS ------------------------------------------------------------------ -->
                <!-- ------------------------------------------------------------------------------------ -->
                <h2>Boss</h2>
                <p class="firstPara">The boss is red and white and is only activated in the final level. It has a similar movement to the patroller enemy type as it also moves back and forth over a set range. It is the only entity that uses health and designed to be the same length as its current health value (which initially starts at 10). This makes it easy for the player to see how much health it has left, and how many times he still needs to attack the boss.</p>

                <p>The boss can shoot standard enemy units at the player. To show when the boss is able to shoot, it has 3 white LEDs in front of it. Whenever he shoots, one of these LEDs disappears. It will shoot 3 times before reloading.</p>

                <p>When the player hits the boss, the boss loses 2 health. The boss will also instantly move to the other end of the board and will activates some environmental types to increase the difficulty for the player.</p>

                <p>When the boss health is zero, then the player wins the level.</p>

                <!-- HARDWARE ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
                <!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
                <!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

                <h1>Hardware Logic</h1>
                <p class="firstPara">When designing the game, we knew that we needed some core components in order to get it operational. We also needed certain tools in order to make the game complete, easy to play and intuitive to use and setup/teardown.</p>

                <strong>Core Components</strong>
                <ul>
                    <li>Arduino Mega</li>
                    <li>LED Strip (WS2812b 5m Individually Addressable Strip)</li>
                    <li>MPU-6050 (GY-521) 3-Axis Accelerometer and Gyro</li>
                    <li>Door Spring</li>
                    <li>Power Supply</li>
                </ul>

                <br>

                <strong>Tools and Extra Bits</strong>
                <ul>
                    <li>Soldering Iron</li>
                    <li>Wire</li>
                    <li>3D Printer</li>
                </ul>

                <br>

                <p>We decided on the Arduino Mega because it has 256 kB of flash memory (compared to the 32kB of the Uno) and 8kB of SRAM (compared to the 2kB on the Uno). The fact that we have a few thousand lines of code, and that many objects are created and used in the various levels, we needed something with a bit more memory.</p>

                <p>The LED strip needed to have individually addressable LEDs. This would allow for us to control exactly what we want to display and how we want to display it.</p>

                <p>The MPU-6050 chip is used to control the movement and attacking of the player. We wanted something other than a joystick and buttons for movement and attacking. This is limiting int what we can do, but it makes learning the game easier.</p>

                <p>The power supply is used to control the LED strip. It requires approximately 15 Amps if we wanted to have all the LEDs on at full white brightness. We are using a supply that give 2 Amps of current. Because we have a changing game state, and full control over level design, we will almost never have to fully power all the lights.</p>

                <p>The LED strip that was delivered had short connection wires. We wanted something that could be set up at least 4 meters away. We had to cut and solder on some new wire so that the strip could be setup at a distance.</p>

                <p>In order for the game to be easy for people to learn and play, everything had to be housed in a boxes and compartments of sorts. In order to customize the housing, we found 3D models online that would fit the Arduino Mega. We then modified these files and printed them on a 3D printer. We also made some 3D printed clips so we could stick the LED strip to the wall without covering any of the LEDs.</p>

                <!-- <img src="images/DungeonCrawler_ControllerModel.png" alt="Controller 3D Model" /> -->
                <figure>
                    <img src="images/DungeonCrawler_ControllerModel.png" alt="Controller 3D Model" style="width:100%">
                    <figcaption>Controller 3D Model</figcaption>
                </figure>

                <!-- SOFTWARE ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
                <!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
                <!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

                <h1>Software Logic</h1>
                <p class="firstPara">Here, we will describe the logic of the game so that we can get an idea of what will be happening in the code, like, how we will represent the LED strip or the player and the baddies.</p>

                <h2>Board</h2>
                <p class="firstPara">We will call the LED strip “Board”. The Board length will be the number of LEDs on the strip. Board[0] will represent the first LED, or the leftmost LED. Board[length] will represent the last LED, or the rightmost LED. The main purpose of the Board is to display the current frame - the position and color of each active game piece (the player, baddies). Interaction with the Board will be determined by the library used to interact with the LED strip - and array of integers may represent the LED position and it’s color may be set by some function in the library.</p>

                <h2>Main Game Loop</h2>
                <p class="firstPara">The Main Game Loop (MGL) will be where we coordinate all game pieces, get user input (the spring), and update the Board.</p>

                <p>The MGL will update some number of times per second. We need to limit, or at least pre-determine, the FPS in order to control animation and positioning of the game pieces easily. We could uncap the fps but this might add complexity that we don’t want to handle. A fixed FPS will be more manageable in the short-term.  The FPS method involves clearing the Board at the beginning of the loop, updating game pieces and executing game logic, then displaying the Board. We will refine this method later as features because more complex and require alternate methods of implementing the MGL to achieve.</p>

                <h2>Game Pieces</h2>
                <p class="firstPara">Game pieces will contain all data needed by the object it represents. Every game piece needs a position, rate of change to indicate motion, color or animation, and hitbox. The position is all of the LEDs that represent the object while the hitbox is the range of LEDs that the game will consider in it’s logic.</p>

                <p>To logically represent an action, such as attacking, we toggle a boolean in the Player object. Whenever we update the game piece, we consider all possible states of the object and change its appearance as required. We can think of the game piece’s update function as a sub-game loop; it will iterate for each iteration of the MGL. To animate the piece, we simply need to keep track of the frame count from the start of the animation and change the color, position, or hitbox of the piece according to the count.</p>

                <h2>Entities</h2>
                <p class="firstPara">An Entity is the object representation of any game piece, controlling position, movement, and animations. It stores the information needed to translate the object to its physical appearance on the Board. We can say that each LED used by an object is one of it’s pixels. Figure 1 shows this idea. As we continue, we will present Entity concepts in the same manner.</p>

                <figure>
                    <img src="images/DungeonCrawler_Entity.png" alt="Figure 1 - Basic Entity Model" style="width:100%">
                    <figcaption>Figure 1 - Basic Entity Model</figcaption>
                </figure>

                <strong>Position/Anchor</strong>
                <p class="firstPara">We need some way of determining the position of an entity. In the simplest case, we can set an anchor point for the object, some point that is contained within the physical bounds of the object. For example, we can anchor the object on its leftmost pixel, using it to position the entity on the Board and as first index of an array defining the color of pixels, which we discuss next. We must define the anchor to be an index to the Board array of LEDs.</p>

                <figure>
                    <img src="images/DungeonCrawler_EntityAnchor.png" alt="Figure 2 - Entity Anchor" style="width:100%">
                    <figcaption>Figure 2 - Entity Anchor</figcaption>
                </figure>

                <strong>Color Array</strong>
                <p class="firstPara">To define the physical appearance of an entity, we implement a fixed-size array, the first index is located at the anchor. Each entry of the array is a color object as defined by the Board object and indicates the intended color of a specific pixel. The index into the array is an offset from the anchor.</p>

                <figure>
                    <img src="images/DungeonCrawler_EntityColor.png" alt="Figure 2 - Entity Color" style="width:100%">
                    <figcaption>Figure 3 - Entity Color</figcaption>
                </figure>

                <strong>Logical Bounds (hitbox) </strong>
                <p class="firstPara">We can define bounds around the anchor to act as collision points. The left bound represents the leftmost point of the entity which can be collided with. The right bound represents the rightmost point of the entity which can be collided with. This means that we can calculate the position of the entity within the limits of the Board - the entity cannot move past the right edge of the Board any further than the right bound. The figures below show this.</p>

                <figure>
                    <img src="images/DungeonCrawler_EntityBounds.png" alt="Figure 2 - Entity Bounds" style="width:100%">
                    <figcaption>Figure 4 - Entity Bounds</figcaption>
                </figure>

                <p>We interpret Board collisions as follows. If the entity’s left boundary has the same index as the leftmost Board pixel, then the entity cannot move any further to the left. If the entity’s right boundary has the same index as the rightmose Board pixel, the entity cannot move further to the right</p>

                <figure>
                    <img src="images/DungeonCrawler_EntityCollision.png" alt="Figure 2 - Entity Collision Detection" style="width:100%">
                    <figcaption>Figure 5 - Entity Collision Detection</figcaption>
                </figure>

                <strong>Movement</strong>
                <p class="firstPara">To translate movement of an entity to the Board, we assign to an entity a speed in pixels per unit of time. A positive speed results in movement to the right, a negative speed to the left. A stationary entity will have a speed of 0. The speed variable will be applied to the position of the entity’s anchor. For each iteration of the MGL, we receive input from the user, translate it to a speed, and update the Player entity’s anchor position, where doing so will update the position of the whole entity. </p>

                <figure>
                    <img src="images/DungeonCrawler_EntityMovement.png" alt="Figure 2 - Entity Movement" style="width:100%">
                    <figcaption>Figure 6 - Entity Movement</figcaption>
                </figure>

                <strong>Single-pixel Entity</strong>
                <p class="firstPara">We can define entities to be a single pixel in size. Using the ideas of entities already discussed, we apply it to a single-pixel entity. The entity anchor, left bound, and right bound are all set to the same index of the Board.</p>

                <figure>
                    <img src="images/DungeonCrawler_EntitySinglePixel.png" alt="Figure 2 - Definition of a single-pixel entity" style="width:100%">
                    <figcaption>Figure 7 - Definition of a single-pixel entity</figcaption>
                </figure>

                <h2>Entity Implementations</h2>
                <p class="firstPara">All game pieces implemented for this project are classes derived from the Entity class, and have basic functions that allow for collision detection, removing pieces from the board, and basic positioning on the board. We will discuss further the logic needed to implement each type of Entity developed for this project.</p>

                <strong>Player (Implemented in Player.h and Player.cpp)</strong>
                <p class="firstPara">As discussed in Game Design, the player is a simple Entity that only has two actions to perform: movement and attacking. Despite it’s trivial design, it’s implementation needed extra care when developing. Player is the user’s main interaction with the Board and must be made to do what the player expects, mainly move the way the user wants it to move and attack when the player wants to attack. </p>

                <p>Movement requires the Player object include a variable to represent speed - the rate of change per frame. Every time the MGL updates Player, the Player’s speed is added to it’s anchor, and in turn updates all Entity values including left and right bounds and pixel indices. The speed variable is set in the MGL and is received from the user through a gyroscope (discussed in Hardware Logic) and ranges from -1 to 1. </p>

                <p>Attacking is more complex than implementing movement because it requires timers to control the duration of an attack as well as manipulation of bounds and the anchor. To begin, the user input must signal an intention to attack (discussed in Hardware Logic). Once an attack is signalled, the Player calls the function startAttack()  . This function alters the appearance of the Player by increasing its size to five pixels and changes the Player color to purple. Because the Player’s size is increased, instead of just adding four pixels to the right of the initial single-pixel state, we must add two pixels on the left and two pixels to the right of the starting pixel so that the Player grows in both directions - spreading from the Player center. To achieve this, we fake the effect. When the Player attacks, we increase the right bound to the specified length, in this case, five, so that the Player will be five pixels long while attacking. To make it appear as if the pixels spread out from the center, we shift the anchor back two positions and draw five pixels starting at that location. Once the attack duration is reached (determined by counting the number of frames from the start of the attack), we shift the anchor back to its original location and decrease the size and right bound location, and the effect is achieved.</p>

                <strong>Enemy (Implemented in Enemy.h and Enemy.cpp)</strong>
                <p class="firstPara">The Enemy is the simplest Entity implemented in the base game. As discussed in Game Design, the main function of the Enemy is to travel along the Board in a single direction. Giving the Enemy a constant speed and updating it’s anchor for every loop of the MGL makes the Enemy march towards the Player until the player kills the Enemy or the Enemy kills the Player. Another feature added to Enemies is the ability to sleep. This effectively gives the Enemy a delay between level setup and when it appears on the Board and begins moving towards the player. This requires an extension to the base Entity draw function - in addition to not drawing dead Entities, an Enemy will not be drawn if it is sleeping. To ensure that an Enemy eventually wakes up and begins hunting the Player, a sleep interval is defined for each instance of an Enemy. Each time the Enemy is updated, a counter is incremented and once the counter reaches the previously defined sleep-interval, the Enemy wakes up and can now move.</p>

                <strong>Patroller (Implemented in Patroller.h and Patroller.cpp)</strong>
                <p class="firstPara">The Patroller is the most unique Entity in that it’s speed is not constant - it travels in one direction, slows down, and travels the other way. We accomplish this by applying a simple sine function to a counter that indefinitely increases as well as other factors to control the position further. This function is defined as follows:</p>

                <pre style='color:#000000;'>anchor <span style='color:#808030; '>=</span> starting_position <span style='color:#808030; '>+</span> <span style='color:#808030; '>(</span> <span style='color:#603000; '>sin</span><span style='color:#808030; '>(</span> patrol <span style='color:#808030; '>*</span> <span style='color:#008000; '>0.01</span> <span style='color:#808030; '>*</span> PATROL_SPEED <span style='color:#808030; '>)</span> <span style='color:#808030; '>*</span> PATROL_DISTANCE <span style='color:#808030; '>)</span><span style='color:#800080; '>;</span></pre>

                <p>Where we define starting_position to be the initial anchor, PATROL_SPEED is the speed at which to move from side-to-side, PATROL_DISTANCE is how far to travel in either direction and patrol is the indefinite counter.</p>

                <p>To provide variety between multiple Patrollers in a single level, we provide an offset value which is added to the initial patrol value, effectively shifting the sine-wave cycle so that the Enemy begins the level at a different position other than its default starting position.</p>

                <strong>Lava (Implemented in Lava.h and Lava.cpp)</strong>
                <p class="firstPara">Similar to the Patroller Entity, the Lava Entity uses a sine function to determine the on- and off-states. The function</p>

                <pre style='color:#000000;'><span style='color:#603000; '>sin</span><span style='color:#808030; '>(</span>attacking_counter <span style='color:#808030; '>*</span> <span style='color:#008000; '>0.001</span> <span style='color:#808030; '>*</span> LAVA_SPEED<span style='color:#808030; '>)</span></pre>
                <!--Created using ToHtml.com on 2019-01-03 01:23:49 UTC -->


            </div>           
               
        </main>

        <!--Footer actions-->
        <div class="footerActions">
            <a href="http://www.dpiner.com/games" class="backButton"><img src="/images/backArrow.svg"/>BACK TO GAMES</a>
            <a href="#" class="upButton"><img src="/images/upArrow.svg"/>BACK TO TOP</a>
        </div>

        <?php include "../footer.php"; ?>
        
	</div>
</body>
</html>
