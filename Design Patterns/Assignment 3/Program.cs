using System;
using System.Collections.Generic;
using System.Linq;

namespace Assignment_3{
    internal class Program{
        public static void Main(string[] args){
            ICustomer rootCustomer = new CompositeCustomer("Ammar");

            ICustomer firstChild1 = new CompositeCustomer("Anas");
            ICustomer firstChild2 = new CompositeCustomer("Aseed");
            ICustomer firstChild3 = new CompositeCustomer("Waleed");

            ICustomer secondChild11 = new LeafCustomer("Moudood");
            ICustomer secondChild12 = new CompositeCustomer("Zain");
            ICustomer secondChild21 = new LeafCustomer("Ahmed");

            ICustomer thirdChild121 = new LeafCustomer("Hurrairah");
            
            ((CompositeCustomer)rootCustomer).addChild(firstChild1);
            ((CompositeCustomer)rootCustomer).addChild(firstChild2);
            ((CompositeCustomer)rootCustomer).addChild(firstChild3);
            
            ((CompositeCustomer)firstChild1).addChild(secondChild11);
            ((CompositeCustomer)firstChild1).addChild(secondChild12);
            ((CompositeCustomer)firstChild2).addChild(secondChild21);
            
            ((CompositeCustomer)secondChild12).addChild(thirdChild121);
            
            Console.Write(rootCustomer.getChildHierarchy(1));
            
            Console.Write( "\n Selling Items: \n");
            thirdChild121.sellProduct();
            secondChild12.sellProduct();
            secondChild21.sellProduct();
            firstChild3.sellProduct();
            Console.Write("\nHierarchy After Selling: \n");
            
            Console.Write(rootCustomer.getChildHierarchy(1));
        }
    }

    internal interface ICustomer{
        ICustomer parent{ get; set; }
        double totalProfit{ get; set; }
        string name{ get; set; }
        void sellProduct();
        string getDetails();
        void getProfit(double profit);
        string getChildHierarchy(int tabCount);
    }
    
    internal abstract class Customer : ICustomer{
        public ICustomer parent{ get; set; }
        public double totalProfit{ get; set; }
        public string name{ get; set; }

        public void sellProduct(){
            var sellPrice = Math.Ceiling(new Random().NextDouble() * 100);
            Console.Write($"-{name} sold an item for {sellPrice}\n");
            getProfit(sellPrice);
        }

        public string getDetails(){
            return $"{name} has total profit of {totalProfit}";
        }

        public void getProfit(double profit){
            totalProfit += profit * 0.9;
            if (parent != null){
                parent.getProfit(profit * 0.1);
            }else{
                totalProfit += profit * 0.1;
            }
        }

        public abstract string getChildHierarchy(int tabCount);
    }
    
    internal class CompositeCustomer : Customer{
        private List<ICustomer> children;

        public CompositeCustomer(string name){
            this.name = name;
            children = new List<ICustomer>();
        }

        public void addChild(ICustomer newChild){
            children.Add(newChild);
            newChild.parent = this;
        }

        public override string getChildHierarchy(int tabCount){
            return (getDetails() + "\n" +  children.Aggregate("", (current, customer) =>
                current + new string('\t', tabCount) + " -child: " + customer.getChildHierarchy(tabCount + 1) + "\n"))
                .Replace("\n\n", "\n");
        }
    }
    
    internal class LeafCustomer : Customer{
        public LeafCustomer(string name){
            this.name = name;
        }
        public override string getChildHierarchy(int tabCount){
            return getDetails()   + " - (Leaf Node - No children))";
        }
    }
}