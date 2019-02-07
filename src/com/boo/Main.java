package com.boo;

public class Main {

    public static void main(String[] args) {
       /* Player player = new Player();
        player.name = "boo";
        player.health= 20;
        player.weapon = "sword";

        int damage = 10;
        player.loseHealth(damage);
        System.out.println("Remaining health = "
                + player.healthRemaining());
        System.out.println();
        damage = 11;
        //player.health = 200;
        player.loseHealth(damage);
        System.out.println("Remaining health = "
                + player.healthRemaining() + "\n");
*/
        //
        EnhancedPlayer enhancedPlayer = new
                EnhancedPlayer("boo", 240,
                "ninjutsu");
        System.out.println("Initial health is " + enhancedPlayer.getHealth() );
        enhancedPlayer.loseHealth(10);

    }


}
