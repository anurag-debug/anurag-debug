/* package codechef; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		
		String str = null;
	    	Scanner scan = new Scanner(System.in);
	double bal = 0;
int wid =0;
str = scan.nextLine();
String[] arr = str.split(" ");

wid = Integer.valueOf(arr[0]);
bal = Double.valueOf(arr[1]);

if(bal>=(wid+.5)) {
if(wid%5==0)
{
	System.out.println((bal-(wid+.5)));
}
else {
	System.out.println(bal);
}
}
else {
	System.out.println(bal);
}

	}
}
