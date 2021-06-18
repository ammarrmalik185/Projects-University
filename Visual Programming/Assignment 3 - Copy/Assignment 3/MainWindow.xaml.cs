using System;
using System.Windows;

namespace Assignment_3 {

    public partial class MainWindow {
        private string equation;
        private string displayNumber;
        private bool hasOperator;
        private string currentOperator;
        private float firstNumber;
        private float secondNumber;
        
        public MainWindow() {
            InitializeComponent();
            reset();
        }
        
        private void reset() {
            equation = "";
            hasOperator = false;
            firstNumber = 0;
            secondNumber = 0;
            displayNumber = "0";
            updateDisplay();
        }
        
        
        private void ButtonClick_Negative(object sender, RoutedEventArgs e) {
            float displayFloat = float.Parse(displayNumber);
            displayFloat = -displayFloat;
            displayNumber = displayFloat.ToString();
            updateDisplay();
        }
        private void ButtonClick_Point(object sender, RoutedEventArgs e) {
            if (!displayNumber.Contains("."))
                displayNumber += ".";
            updateDisplay();
        }
        
        
        private void ButtonClick_Number_0(object sender, RoutedEventArgs e) {
            AddNumberToEquation("0");
        } 
        private void ButtonClick_Number_1(object sender, RoutedEventArgs e) {
            AddNumberToEquation("1");
        }
        private void ButtonClick_Number_2(object sender, RoutedEventArgs e) {
            AddNumberToEquation("2");
        }
        private void ButtonClick_Number_3(object sender, RoutedEventArgs e) {
            AddNumberToEquation("3");
        }
        private void ButtonClick_Number_4(object sender, RoutedEventArgs e) {
            AddNumberToEquation("4");
        }
        private void ButtonClick_Number_5(object sender, RoutedEventArgs e) {
            AddNumberToEquation("5");
        }
        private void ButtonClick_Number_6(object sender, RoutedEventArgs e) {
            AddNumberToEquation("6");
        }
        private void ButtonClick_Number_7(object sender, RoutedEventArgs e) {
            AddNumberToEquation("7");
        }
        private void ButtonClick_Number_8(object sender, RoutedEventArgs e) {
            AddNumberToEquation("8");
        }
        private void ButtonClick_Number_9(object sender, RoutedEventArgs e) {
            AddNumberToEquation("9");
        }
        private void AddNumberToEquation(string number) {
            if (displayNumber == "0")
                displayNumber = number;
            else {
                displayNumber += number;
            }
            
            updateDisplay();
        }
        
        
        private void ButtonClick_Operator_Minus(object sender, RoutedEventArgs e) {
            AddOperator("-");
        }
        private void ButtonClick_Operator_Plus(object sender, RoutedEventArgs e) {
            AddOperator("+");
        }
        private void ButtonClick_Operator_Divide(object sender, RoutedEventArgs e) {
            AddOperator("/");
        }
        private void ButtonClick_Operator_Multiply(object sender, RoutedEventArgs e) {
            AddOperator("*");
        }
        private void ButtonClick_Operator_Modulus(object sender, RoutedEventArgs e) {
            AddOperator("%");
        }
        private void AddOperator(string operator_s) {
            if (hasOperator) {
                secondNumber = float.Parse(displayNumber);
                displayNumber = solveEquation();
            }
            firstNumber = float.Parse(displayNumber);
            equation = displayNumber + " " + operator_s + " ";
            currentOperator = operator_s;
            hasOperator = true;
            displayNumber = "0";
            updateDisplay();
        }
        
        
        private void ButtonClick_Operator_Square(object sender, RoutedEventArgs e) {
            if (hasOperator) {
                secondNumber =  (float) Math.Pow(float.Parse(displayNumber), 2);
                equation += "(" + displayNumber + "^2)";
                displayNumber = solveEquation();
                hasOperator = false;
            }
            else {
                equation = "(" + displayNumber + "^2)";
                displayNumber = Math.Pow(float.Parse(displayNumber), 2).ToString();
            }
            updateDisplay();
        }
        private void ButtonClick_Operator_SquareRoot(object sender, RoutedEventArgs e) {
            if (hasOperator) {
                secondNumber =  (float) Math.Pow(float.Parse(displayNumber), 2);
                equation += "(" + displayNumber + "^(1/2))";
                displayNumber = solveEquation();
                hasOperator = false;
            }
            else {
                equation = "(" + displayNumber + "^(1/2))";
                displayNumber = Math.Pow(float.Parse(displayNumber), 2).ToString();
            }
            updateDisplay();
        }
        private void ButtonClick_Inverse(object sender, RoutedEventArgs e) {
            if (hasOperator) {
                secondNumber =  (1/float.Parse(displayNumber));
                equation += "(1/" + displayNumber + ")";
                displayNumber = solveEquation();
                hasOperator = false;
            }
            else {
                equation = "(1/" + displayNumber + ")";
                displayNumber = (1/float.Parse(displayNumber)).ToString();
            }
            updateDisplay();
        }

        
        private void ButtonClick_Function_ClearAll(object sender, RoutedEventArgs e) {
            reset();
        }
        private void ButtonClick_Function_Clear(object sender, RoutedEventArgs e) {
            displayNumber = "0";
            updateDisplay();
        }
        private void ButtonClick_Function_Backspace(object sender, RoutedEventArgs e) {
            if (displayNumber.Length == 1) {
                displayNumber = "0";
            }else if (displayNumber.Length > 1) {
                displayNumber = displayNumber.Substring(0, displayNumber.Length - 1);
            }
            updateDisplay();
        }
        private void ButtonClick_Function_Solve(object sender, RoutedEventArgs e) {
            if (hasOperator) {
                secondNumber = float.Parse(displayNumber);
                equation += displayNumber;
                displayNumber = solveEquation();
                hasOperator = false;
                updateDisplay();
            }
        }

        
        private string solveEquation() {
            string answer;
            
            switch (currentOperator) {
                case "+":
                    answer = (firstNumber + secondNumber).ToString();
                    break;
                case "-":
                    answer = (firstNumber - secondNumber).ToString();
                    break;
                case "/":
                    answer = (firstNumber / secondNumber).ToString();
                    break;
                case "*":
                    answer = (firstNumber * secondNumber).ToString();
                    break;
                case "%":
                    answer = (firstNumber % secondNumber).ToString();
                    break;
                default:
                    answer = "";
                    break;
            }

            return answer;
        }
        private void updateDisplay() {
            currentNumber.Text = displayNumber;
            currentEquation.Text = equation;
        }

    }
}