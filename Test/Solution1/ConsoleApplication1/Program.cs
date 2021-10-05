using System;

namespace ConsoleApplication1{

    interface IAction{
        public void run();
    }

    class Button{
        private IAction onCLickAction;

        public void setOnClick(IAction action){
            onCLickAction = action;
        }
        
        public void onClick(){
            onCLickAction.run();
        }
    }

    class onClickAction : IAction{
        public void run(){
            Console.WriteLine("Click");
        }
    }
    internal class Program{
        public static void Main(string[] args){
            Button button = new Button();
            
            
            button.setOnClick(new onClickAction());
            button.onClick();
        }
    }
}