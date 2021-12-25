using System.Collections.Generic;

public class Assignment3{
    
}

internal interface ICustomer{
    ICustomer parent{ get; set; }
    double totalProfit{ get; set; }
    string name{ get; set; }
    void sellProduct();
    string getDetails();
    void getProfit(double profit);
}

internal abstract class Customer : ICustomer{
    public ICustomer parent{ get; set; }
    public double totalProfit{ get; set; }
    public string name{ get; set; }

    public void sellProduct(){
        var sellPrice = 100;
        getProfit(sellPrice);
    }

    public string getDetails(){
        return name + " has profit " + totalProfit;
    }

    public void getProfit(double profit){
        totalProfit += profit * 90/100;
        if (parent != null){
            parent.getProfit(profit * 10/100);
        }else{
            totalProfit += profit * 10/100;
        }
    }
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
}

internal class LeafCustomer : Customer{
    public LeafCustomer(string name){
        this.name = name;
    }
}