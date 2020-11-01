import java.util.Arrays;
import java.util.Scanner;
 public class MaximumAdvertiseRevenue 
{
    public static int maximumAdvertiseRevenue(int a[],int b[])
    {
            Arrays.sort(a);
            Arrays.sort(b);
            int result=0;
            for(int i=0;i<a.length;i++)
            {
             // System.out.println(a[i]+" * "+b[i]);
              result=result+a[i]*b[i];
            }
            return result;
    }
    
    public static void main(String args[])
    {
      Scanner scan=new Scanner(System.in);
      int n=scan.nextInt();
      int a[]=new int[n];
      int b[]=new int[n];
      
      for(int i=0;i<n;i++)
      {
          a[i]=scan.nextInt(); 
      }
      
      for(int i=0;i<n;i++)
      {
        b[i]=scan.nextInt();
      }
      
      int result=maximumAdvertiseRevenue(a,b); 
      System.out.println(result);
    }
}
