using System;
using System.Windows;
using System.Windows.Input;

namespace Assignment_3 {

    public partial class MainWindow {
        
        // There values are displayed to the user
        private string equation;
        private string displayNumber;
        
        // Managing the equation
        private bool hasOperator;
        private string currentOperator;
        private float firstNumber;
        private float secondNumber;
        
        // helper variables
        private bool isAnswer;

        // Values related to Memory
        private float M;
        private bool mExists;
        
        public MainWindow() {
            InitializeComponent();
            reset();
        }

        // Handling button presses
        private void KeyPressed (object sender, KeyEventArgs  e) {
            switch (e.Key) {
                case (Key.D0 or Key.NumPad0):
                    AddNumberToEquation("0");
                    break;
                case (Key.D1 or Key.NumPad1):
                    AddNumberToEquation("1");
                    break;
                case (Key.D2 or Key.NumPad2):
                    AddNumberToEquation("2");
                    break;
                case (Key.D3 or Key.NumPad3):
                    AddNumberToEquation("3");
                    break;
                case (Key.D4 or Key.NumPad4):
                    AddNumberToEquation("4");
                    break;
                case (Key.D5 or Key.NumPad5):
                    AddNumberToEquation("5");
                    break;
                case (Key.D6 or Key.NumPad6):
                    AddNumberToEquation("6");
                    break;
                case (Key.D7 or Key.NumPad7):
                    AddNumberToEquation("7");
                    break;
                case (Key.D8 or Key.NumPad8):
                    AddNumberToEquation("8");
                    break;
                case (Key.D9 or Key.NumPad9):
                    AddNumberToEquation("9");
                    break;
                case (Key.Decimal):
                    ButtonClick_Decimal(null, null);
                    break;
                case (Key.Add):
                    AddOperator("+");
                    break;
                case (Key.Subtract):
                    AddOperator("-");
                    break;
                case (Key.Multiply):
                    AddOperator("*");
                    break;
                case (Key.Divide):
                    AddOperator("/");
                    break;
                case (Key.Enter):
                    ButtonClick_Function_Solve(null, null);
                    break;
                case (Key.Back):
                    ButtonClick_Function_Backspace(null, null);
                    break;
            }
        }
        
        
        // Managing M
        private void ButtonClick_M_store(object sender, RoutedEventArgs e) {
            M = float.Parse(displayNumber);
            mExists = true;
        }
        private void ButtonClick_M_add(object sender, RoutedEventArgs e) {
            M += float.Parse(displayNumber);
            mExists = true;
        }
        private void ButtonClick_M_subtract(object sender, RoutedEventArgs e) {
            M -= float.Parse(displayNumber);
            mExists = true;
        }
        private void ButtonClick_M_clear(object sender, RoutedEventArgs e) {
            M = 0;
            mExists = false;
        }
        private void ButtonClick_M_recall(object sender, RoutedEventArgs e) {
            if (mExists) {
                displayNumber = M.ToString();
                updateDisplay();
            }
        }
        private void ButtonClick_M_show(object sender, RoutedEventArgs e) {
            if (mExists)
                MessageBox.Show("M = " + M.ToString());
        }
        
        
        // Simple Changes to displayNumber
        private void ButtonClick_Negative(object sender, RoutedEventArgs e) {
            float displayFloat = float.Parse(displayNumber);
            displayFloat = -displayFloat;
            displayNumber = displayFloat.ToString();
            updateDisplay();
        }
        private void ButtonClick_Decimal(object sender, RoutedEventArgs e) {
            if (!displayNumber.Contains("."))
                displayNumber += ".";
            updateDisplay();
        }
       
        
        // Managing buttons with numbers
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
            if (displayNumber == "0" || isAnswer) {
                displayNumber = number;
                if (isAnswer) {
                    reset();
                    isAnswer = false;
                }
            }else {
                displayNumber += number;
            }
            updateDisplay();
        }
        
        
        // Managing Buttons with operators
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
            isAnswer = false;
            updateDisplay();
        }
        
        
        // Operators that do direct calculations
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
                secondNumber =  (float) Math.Pow(float.Parse(displayNumber), 0.5);
                equation += "(" + displayNumber + "^(1/2))";
                displayNumber = solveEquation();
                hasOperator = false;
            }
            else {
                equation = "(" + displayNumber + "^(1/2))";
                displayNumber = Math.Pow(float.Parse(displayNumber), 0.5).ToString();
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

        
        // Managing button with functions.        
        private void ButtonClick_Function_ClearAll(object sender, RoutedEventArgs e) {
            reset();
        }
        private void ButtonClick_Function_Clear(object sender, RoutedEventArgs e) {
            if (isAnswer) {
                reset();
                return;
            }
            displayNumber = "0";
            updateDisplay();
        }
        private void ButtonClick_Function_Backspace(object sender, RoutedEventArgs e) {
            if (isAnswer)
                return;
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
                isAnswer = true;
                updateDisplay();
            }
        }

        
        // Helper Functions
        private void reset() {
            equation = "";
            isAnswer = false;
            hasOperator = false;
            firstNumber = 0;
            secondNumber = 0;
            displayNumber = "0";
            updateDisplay();
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
            currentNumber.Content = displayNumber;
            currentEquation.Content = equation;
        }
    }
}