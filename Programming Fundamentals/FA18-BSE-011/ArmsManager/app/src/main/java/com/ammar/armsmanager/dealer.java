package com.ammar.armsmanager;

import java.io.File;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class dealer {

    public int id;
    private String name;
    private String contact_number;
    private String country;
    private String rating;
    public String[] assigned_ids;
    public int[] assigned_quantity;

    public dealer(int id,String name, String country, String contno, String rating){

        this.id = id;
        this.name = name;
        this.contact_number = contno;
        this.country = country;
        this.rating = rating;
        assigned_ids = new String[0];
        assigned_quantity = new int[0];


    }

    public void assign(weapon w,int quantity){
        this.assigned_ids = helper_general.addToList(this.assigned_ids, w.getInfo()[0]);
        this.assigned_quantity = helper_general.addToList(this.assigned_quantity,quantity);
    }
    public String[] getAssign(){
        return assigned_ids;
    }

    public String[] getInfo(){
        return new String[] {this.name, this.contact_number, this.country, this.rating};
    }
    public void modifyInfo( String country, String contno, String rating){

        this.contact_number = contno;
        this.country = country;
        this.rating = rating;

    }
    public boolean unAssign(String id) {
        this.assigned_ids = helper_general.removeFromList(this.assigned_ids, id);
        return false;
    }
    public void saveToCache(String path){

        File file = new File(path + "/dealer/" + this.id);


    }
    public void saveToDb(Connection connection){
        try {
            Class.forName("com.mysql.jdbc.Driver");
            String sql= "INSERT INTO `Dealers` " +
                    "(`Serial_No`, `Dealer Name`, `Dealer Rating`, `Dealer Contact No`, `Dealer Country`) " +
                    "VALUES (?,?,?,?,?)";
            PreparedStatement connect =connection.prepareStatement(sql);
            connect.setString(1,Integer.toString(this.id+1));
            connect.setString(2,this.name);
            connect.setString(3,this.rating);
            connect.setString(4,this.contact_number);
            connect.setString(5,this.country);
            connect.executeUpdate();
        }catch (Exception e){
            e.printStackTrace();
        }
    }
    public boolean search(String key){

        return this.name.contains(key) || this.country.contains(key) || this.contact_number.contains(key) ||this.rating.contains(key);

    }

    public void update(Connection connection){

        try {
            Class.forName("com.mysql.jdbc.Driver");
            String sql= "UPDATE `Dealer` set `Dealer Name`=?, `Dealer Rating`=?, `Dealer Contact No`=?, `Dealer Country`=? where `Serial_No`=?";
            PreparedStatement connect =connection.prepareStatement(sql);
            connect.setString(1,name);
            connect.setString(2,rating);
            connect.setString(3,contact_number);
            connect.setString(4,country);
            connect.setString(5,Integer.toString(id+1));
            connect.executeUpdate();
        }catch (Exception e){
            e.printStackTrace();
        }

    }

    public String list(){
        String ret = ("Dealer name   : " + name + "\n" +
                      "Dealer Country: " + country + "\n"+
                      "Dealer Contact: " + contact_number + "\n"+
                      "Dealer rating : " + rating + "\n" +
                      "Assigned Weapons:\n------------\n");
        for (int i = 0;i<assigned_ids.length;i ++)
            ret += (assigned_ids[i] +  "\n quantity: " + assigned_quantity[i] + "\n------------\n");

        return ret;
    }

    public int isAssigned(String name) {
        int ret = 0;
        boolean flag = false;
        for (int i =0;i<assigned_ids.length;i++)
            if (assigned_ids[i].equals(name))
            {
                ret = i;
                flag = true;
                break;
            }
        if (!flag)
            ret = -1;
        return ret;

    }
}
