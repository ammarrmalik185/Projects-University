package com.ammar.armsmanager;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class valuesCommander {

    private Statement statement;
    private Connection connection;

    public boolean flag;

    public ArrayList <dealer> dealerRecords;
    public ArrayList <weapon> weaponRecords;
    public ArrayList <customer> customerRecords;
    public ArrayList <purchase> purchaseRecords;

    private int last_id_w;
    private int last_id_d;
    private int last_id_c;
    private int last_id_p;

    public valuesCommander(){
        dealerRecords = new ArrayList<>();
        weaponRecords = new ArrayList<>();
        customerRecords = new ArrayList<>();
        purchaseRecords = new ArrayList<>();
        last_id_w = 0;
        last_id_d = 0;
        last_id_c = 0;
        last_id_p = 0;


        try {
            flag = true;
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://sql12.freemysqlhosting.net:3306" +
                            "/sql12294360"
                    ,"sql12294360","2R4Epmlpbv");
            statement =connection.createStatement();
        }catch (SQLException e){
            e.printStackTrace();
            flag=false;
        }
        catch (ClassNotFoundException e){
            e.printStackTrace();
            flag=false;
        }
    }

    public void addDealer(int id, String name, String country, String contno, String rating) {

        dealer n = new dealer(id, name, country, contno, rating);
        dealerRecords.add(n);
        last_id_d ++;

    }

    public void addWeapon(int id, String model_name, String manuf_name, String country, int price) {

        weapon n = new weapon(id, model_name, manuf_name, country, price);
        weaponRecords.add(n);
        last_id_w ++;

    }

    public void addCustomer(int id, String name, String country, String contno, String licenceno) {

        customer n = new customer(id, name, country, contno, licenceno);
        customerRecords.add(n);
        last_id_c ++;


    }
    public boolean assign(int id, String arms_name,int quant){
        weapon w;
        boolean flag = false;
        int index_w = -1;
        for (weapon w_temp: weaponRecords) {
            index_w ++;
            if (w_temp.getInfo()[0].equals(arms_name)) {
                w = w_temp;
                dealerRecords.get(id).assign(w,quant);
                weaponRecords.get(index_w).assign(dealerRecords.get(id).id,true);
                flag = true;
                break;
            }
        }
        return flag;



    }

    public  void addPurchase(String Customer_name,String Dealer_name,String Weapon_Name,String Price,String Quantity,int id){
        purchase n = new purchase( Customer_name, Dealer_name, Weapon_Name,Price, Quantity, id);
        purchaseRecords.add(n);
        last_id_p ++;
    }


    public void totalupdate() {

        for(dealer d:dealerRecords)
            d.update(connection);
        for(weapon w:weaponRecords)
            w.update(connection);
        for(customer c: customerRecords)
            c.update(connection);
        for(purchase p:purchaseRecords)
            p.update(connection);

    }


    public String[] search(String key, String mode) {
        String[] view = new String[0];

        if (mode.equals("w")) {
            for (weapon w : weaponRecords)
                if (w.search(key)) {
                    view = helper_general.addToList(view, w.list());

                }
        }
        else if (mode.equals("d")) {
            for (dealer d : dealerRecords)
                if (d.search(key)) {

                    view = helper_general.addToList(view, d.list());

                }
        }
        else if (mode.equals("c")) {
            for (customer c : customerRecords)
                if (c.search(key)) {
                    view = helper_general.addToList(view, c.list(purchaseRecords));

                }
        }

        return view;

    }

    public void db_to_local() throws NullPointerException{
        ResultSet resultSet;
        try{
            String sql = "SELECT * FROM `Weapons`";
            resultSet = statement.executeQuery(sql);
            int weapons_serial_no=0;
            while (resultSet.next()){
                String model_name = resultSet.getString("Model Name");
                String manufacturer_name = resultSet.getString("Manufacturer Name");
                int Price = Integer.parseInt(resultSet.getString("Price"));
                String Country_name = resultSet.getString("Country");
                addWeapon(weapons_serial_no, model_name, manufacturer_name,Country_name,Price);
            }
        }catch (Exception e){
        }
        try{
            String sql = "SELECT * FROM `Dealers`";
            resultSet = statement.executeQuery(sql);
            int dealers_serial_no=1;
            while (resultSet.next()){
                String Dealer_name = resultSet.getString("Dealer Name");
                String Dealer_rating = resultSet.getString("Dealer Rating");
                String Dealer_contact_no = resultSet.getString("Dealer Contact no");
                String Country_name = resultSet.getString("Dealer Country");
                addDealer(dealers_serial_no,Dealer_name,Country_name,Dealer_contact_no,Dealer_rating );
                dealers_serial_no ++;
            }
        }catch (Exception e){

        }try{
            String sql = "SELECT * FROM `Dealer Weapons`";
            resultSet = statement.executeQuery(sql);
            int dealers_serial_no=0;
            while (resultSet.next()){
                assign(dealers_serial_no,resultSet.getString("Weapon1"),0);
                assign(dealers_serial_no,resultSet.getString("Weapon2"),0);
                assign(dealers_serial_no,resultSet.getString("Weapon3"),0);
                assign(dealers_serial_no,resultSet.getString("Weapon4"),0);
                assign(dealers_serial_no,resultSet.getString("Weapon5"),0);
                assign(dealers_serial_no,resultSet.getString("Weapon6"),0);
                assign(dealers_serial_no,resultSet.getString("Weapon7"),0);
                assign(dealers_serial_no,resultSet.getString("Weapon8"),0);
                assign(dealers_serial_no,resultSet.getString("Weapon9"),0);
                assign(dealers_serial_no,resultSet.getString("Weapon10"),0);

            }
        }catch (Exception e){
            e.printStackTrace();
        }
        try{
            String sql = "SELECT * FROM `Dealer Stock`";
            resultSet = statement.executeQuery(sql);
            int dealers_serial_no=0;
            while (resultSet.next()) {
                dealerRecords.get(dealers_serial_no).assigned_quantity[0] = Integer.parseInt(resultSet.getString("Stock1"));
                dealerRecords.get(dealers_serial_no).assigned_quantity[1] = Integer.parseInt(resultSet.getString("Stock2"));
                dealerRecords.get(dealers_serial_no).assigned_quantity[2] = Integer.parseInt(resultSet.getString("Stock3"));
                dealerRecords.get(dealers_serial_no).assigned_quantity[3] = Integer.parseInt( resultSet.getString("Stock4"));
                dealerRecords.get(dealers_serial_no).assigned_quantity[4] = Integer.parseInt( resultSet.getString("Stock5"));
                dealerRecords.get(dealers_serial_no).assigned_quantity[5] = Integer.parseInt( resultSet.getString("Stock6"));
                dealerRecords.get(dealers_serial_no).assigned_quantity[6] = Integer.parseInt( resultSet.getString("Stock7"));
                dealerRecords.get(dealers_serial_no).assigned_quantity[7] = Integer.parseInt(resultSet.getString("Stock8"));
                dealerRecords.get(dealers_serial_no).assigned_quantity[8] = Integer.parseInt( resultSet.getString("Stock9"));
                dealerRecords.get(dealers_serial_no).assigned_quantity[9] = Integer.parseInt( resultSet.getString("Stock10"));
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        try{
            String sql = "SELECT * FROM `Customer`";
            resultSet = statement.executeQuery(sql);
            int customers_serial_no=0;
            while (resultSet.next()) {
                String customer_name = resultSet.getString("Customer Name");
                String customer_license_no = resultSet.getString("Customer License No");
                String customer_contact_no = resultSet.getString("Customer Contact No");
                String Country_name = resultSet.getString("Customer Country");
                addCustomer(customers_serial_no, customer_name,Country_name,customer_contact_no,customer_license_no);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        try{
            String sql = "SELECT * FROM `Purchase`";
            resultSet = statement.executeQuery(sql);
            int purchase_serial_no=0;
            while (resultSet.next()){
                String customer_name = resultSet.getString("Customer Name");
                String dealer_name = resultSet.getString("Dealer Name");
                String weapon_name = resultSet.getString("Weapon Name");
                String Quantity = resultSet.getString("Quantity");
                String Price = resultSet.getString("Price");
                addPurchase(customer_name,dealer_name,weapon_name,Price,Quantity,purchase_serial_no);

            }
        }catch (Exception e){
            e.printStackTrace();
        }

    }

    public int Wexists(String name){
        boolean flag = false;
        int index = 0;
        for (weapon w: weaponRecords){
            if (w.getInfo()[0].equals(name)){
                flag = true;
                break;}
             index++;}

            if (!flag)
                index = -1;

        return index;
    }
    public int Dexists(String name) {
        boolean flag = false;
        int index = 0;
        for (dealer w : dealerRecords) {
            if (w.getInfo()[0].equals(name)) {
                flag = true;
                break;}
                index++;
            }
            if (!flag)
                index = -1;
            return index;
        }


    public int Cexists(String name){
        boolean flag = false;
        int index = 0;
        for (customer w: customerRecords) {
            if (w.getInfo()[0].equals(name)) {
                flag = true;
                break;
            }
            index++;
        }
        if (!flag)
            index = -1;
        return index;
    }
    public void addnewDealer(String name, String country, String contno, String rating) {

        dealer n = new dealer(last_id_d, name, country, contno, rating);
        n.saveToDb(connection);
        dealerRecords.add(n);
        last_id_d ++;

    }

    public void addnewWeapon(String model_name, String manuf_name, String country, int price) {

        weapon n = new weapon(last_id_w, model_name, manuf_name, country, price);
        n.saveToDb(connection);
        weaponRecords.add(n);
        last_id_w ++;

    }

    public void addnewCustomer(String name, String country, String contno, String licenceno) {

        customer n = new customer(last_id_c, name, country, contno, licenceno);
        n.saveToDb(connection);
        customerRecords.add(n);
        last_id_c++;

    }
    public  String addnewPurchase(String Customer_name,String Dealer_name,String Weapon_Name,String Price,String Quantity){
        purchase n = new purchase( Customer_name, Dealer_name, Weapon_Name,Price, Quantity, last_id_p);
        n.saveToDb(connection);
        int dealer_index = this.Dexists(Dealer_name);
        int value_index = dealerRecords.get(dealer_index).isAssigned(Weapon_Name);
        dealerRecords.get(dealer_index).assigned_quantity[value_index] -= Integer.parseInt(Quantity);
        String ret = n.receipt();
        purchaseRecords.add(n);
        last_id_p ++;
        return ret;
    }

    public void unassign(String weapon_name){

        weapon w = weaponRecords.get(Wexists(weapon_name));
        int dealer_id = w.dealerId();
        dealer d = dealerRecords.get(dealer_id);

        int weapon_id  = d.isAssigned(weapon_name);
        w.assign(-1,false);
        int weapon_quantity = d.assigned_quantity[weapon_id];
        d.assigned_quantity = helper_general.removeFromList(d.assigned_quantity,weapon_quantity);
        d.assigned_ids = helper_general.removeFromList(d.assigned_ids,weapon_name);

    }

    public void generate_dud_records(){

        addWeapon(0, "aug", "someone","America", 9000 );
        addWeapon(1, "M1 Grand", "one","Germany", 100000 );
        addWeapon(2, "ak-47", "humans","Russia", 20000 );
        addDealer(0, "Silencer co", "Germany","034156945", "5" );
        addDealer(1, "just another dealer", "America","035645614", "4" );
        assign(0,"aug",4);
        assign(0,"M1 Grand",3);
        addCustomer(0, "not a customer", "black market","564556151", "555" );
        addPurchase("not a customer","Silencer co", "aug","18000", "2", 0);


    }

}
