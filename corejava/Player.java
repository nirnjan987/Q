//Encapsulation
 
class Player
{ 
 private String pName; 
 private int pAge; 
 private String gameType; 

public Player(String pName, int pAge, String gameType)
{ 
 this.pName = pName; 
 this.pAge = pAge; 
 this.gameType = gameType;
} 
public String getPName()
{ 
 return pName; 
} 
public int getPAge()
{ 
 return pAge; 
} 
public String getGameType()
{ 
 return gameType; 
 } 
} 
public class PlayerTest 
{ 
public static void main(String[] args) 
{ 
Player ply = new Player("Sachin", 40, "Cricket"); 
 String plyName = ply.getPName(); 
 int plyAge = ply.getPAge(); 
 String plyGameType = ply.getGameType(); 

System.out.println("Player's Name: " +plyName); 
System.out.println("Player's Age: " +plyAge); 
System.out.println("Player's Gametype: " +plyGameType); 
 } 
}