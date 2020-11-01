import java.util.*;

public class DifferentSummands {
    vector<int> optimal_summands(int n) {
    // using the algorithm described in the pdf
        vector<int> summands;
        for (int k = n, l = 1; k > 0; l++) {
            if (k <= 2 * l) {
                summands.push_back(k);
                k -= k;
            } else {
                summands.push_back(l);
                k -= l;
            }
        }
        return summands;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        List<Integer> summands = optimalSummands(n);
        System.out.println(summands.size());
        for (Integer summand : summands) {
            System.out.print(summand + " ");
        }
    }
}

