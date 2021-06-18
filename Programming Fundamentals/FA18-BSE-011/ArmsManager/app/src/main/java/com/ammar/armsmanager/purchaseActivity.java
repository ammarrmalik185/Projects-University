package com.ammar.armsmanager;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.EditText;
import android.view.View;
import android.widget.Toast;

public class purchaseActivity extends AppCompatActivity {

    valuesCommander values;
    EditText edit_1;
    EditText edit_2;
    EditText edit_3;
    EditText edit_4;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.purchase_activity);
        edit_1 = findViewById(R.id.editText6);
        edit_2 = findViewById(R.id.editText4);
        edit_3 = findViewById(R.id.editText7);
        edit_4 = findViewById(R.id.editText8);
        values = new valuesCommander();

        values.generate_dud_records();
    }
    public void purchase_process(View view){
        String weapon_name = edit_1.getText().toString();
        String dealer_name = edit_2.getText().toString();
        String customer_name = edit_3.getText().toString();
        int quantity = 0;
        if(!edit_4.getText().toString().equals(""))
            quantity = Integer.parseInt(edit_4.getText().toString());

        if(values.Wexists(weapon_name) != -1)
            if(values.Dexists(dealer_name) != -1)
                if (values.Cexists(customer_name) != -1)

                    if(values.dealerRecords.get(values.Dexists(dealer_name)).isAssigned(weapon_name) != -1){
                        if (values.dealerRecords.get(values.Dexists(dealer_name)).assigned_quantity[values.dealerRecords.get(values.Dexists(dealer_name)).isAssigned(weapon_name)] >= quantity)
                        {
                            int Price = Integer.parseInt(values.weaponRecords.get(values.Wexists(weapon_name)).getInfo()[3]) * quantity;
                            String recipt = values.addnewPurchase(customer_name,dealer_name,weapon_name,Integer.toString(Price),Integer.toString(quantity));
                            Toast.makeText(purchaseActivity.this,"Purchase Successful", Toast.LENGTH_LONG).show();
                            values.totalupdate();

                            Intent i = new Intent(this,reciptActivity.class);
                            i.putExtra("recipt", recipt);
                            startActivity(i);

                        }
                            else Toast.makeText(purchaseActivity.this,"Quantity higher than stock", Toast.LENGTH_LONG).show();
                    }
                        else Toast.makeText(purchaseActivity.this,"Weapon not assigned to the dealer", Toast.LENGTH_LONG).show();


                else Toast.makeText(purchaseActivity.this,"Customer does not exist", Toast.LENGTH_LONG).show();
                else Toast.makeText(purchaseActivity.this,"Dealer does not exist", Toast.LENGTH_LONG).show();
                else Toast.makeText(purchaseActivity.this,"Weapon does not exist", Toast.LENGTH_LONG).show();

    }
}
