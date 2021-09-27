interface CricketPlayer {
	void Name();
	void Age();
	void HighestScore();
}
abstract class Player implements CricketPlayer {

	 public void Name()
	{
		System.out.println("MS Dhoni");
	}
     public void Age()
	{
		System.out.println("Age: 40");
	}
}

class ply extends Player {
	 public void HighestScore()
	{
		System.out.println("Highest score in ODI: 183");
	}
}
public class list {
	public static void main(String[] args)
	{

		ply a1 = new ply();
		a1.Name();
		a1.Age();
		a1.HighestScore();
        
	}
}