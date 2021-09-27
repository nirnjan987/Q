class fetchData extends Thread {
    public void T1()
    {
        for(int i=1;i<=3;i++)
        {
            System.out.println("This Fetch Data Thread");
            try{
                Thread.sleep(5000);
            }
            catch(Exception e)
            {

            }

        }
    }
}
class processData implements Runnable
{
    public void T2(){
        for(int i=1;i<=3;i++)
        {
            System.out.println("This is process data");
            try{
                Thread.sleep(10000);
            }
            catch(Exception e)
            {

            }
        }
    }
}
public class final{
    public static void main(String args[])
    {
        fetchData obj= new fetchData();
        processData obj1=new processData();
        obj.T1();
        obj1.T2();
    }
}