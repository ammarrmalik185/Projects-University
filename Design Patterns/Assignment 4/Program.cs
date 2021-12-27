using System;

namespace Assignment_4{
    internal class TextEditor{
        public static void Main(string[] args){
            MenuBar menuBar = new MenuBar();
            ICommand copy = menuBar.GetCommand(Command.Copy);
            copy.execute();
            ICommand cut = menuBar.GetCommand(Command.Cut);
            cut.execute();
            ICommand paste = menuBar.GetCommand(Command.Paste);
            paste.execute();
        }
    }

    public interface ICommand{
        void execute();
    }

    public class CutCommand : ICommand{
        public void execute(){
            Console.WriteLine("Cut Ran");
        }
    }
    public class CopyCommand : ICommand{
        public void execute(){
            Console.WriteLine("Copy Ran");
        }
    }
    public class PasteCommand : ICommand{
        public void execute(){
            Console.WriteLine("Paste Ran");
        }
    }

    internal enum Command{
        Copy, Cut, Paste
    }

    internal class MenuBar{
        public ICommand GetCommand(Command c){
            return c switch{
                Command.Copy => new CopyCommand(),
                Command.Cut => new CutCommand(),
                Command.Paste => new PasteCommand(),
                _ => new CopyCommand()
            };
        }
    }
}