package com.ammar.armsmanager;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;


public class MainActivity extends AppCompatActivity {

    public static valuesCommander values;
    @Override
    protected void onCreate (Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //values = new valuesCommander();
        Button b = findViewById(R.id.button2);
        //if (values.flag)
            //b.setText("true");
        //else
           // b.setText("false");

    }

    public void goto_addActivity_w(View view){
        Intent i = new Intent(this,addActivity.class);
        i.putExtra("mode", "w");
        startActivity(i);
        }
    public void goto_addActivity_d(View view){
        Intent i = new Intent(this,addActivity.class);
        i.putExtra("mode", "d");
        startActivity(i);
    }
    public void goto_addActivity_c(View view){
        Intent i = new Intent(this,addActivity.class);
        i.putExtra("mode", "c");
        startActivity(i);
    }

    public void goto_purchaseActivity(View view){
        Intent i = new Intent(this, purchaseActivity.class);

        startActivity(i);
    }
    public void goto_viewActivity_w(View view){
        Intent i = new Intent(this, viewActivity.class);
        i.putExtra("mode", "w");
        startActivity(i);

    }
    public void goto_viewActivity_d(View view){
        Intent i = new Intent(this, viewActivity.class);
        i.putExtra("mode", "d");
        startActivity(i);

    }
    public void goto_viewActivity_c(View view){
        Intent i = new Intent(this, viewActivity.class);
        i.putExtra("mode", "c");
        startActivity(i);

    }

    public void goto_assign(View view){
        Intent i = new Intent(this, assign_activity.class);
        startActivity(i);
    }
    public void goto_unassign(View view){
        Intent i = new Intent(this, unassign.class);
        startActivity(i);
    }

    public void goto_quantity_editor(View view){
        Intent i = new Intent(this, quantity_editor.class);
        startActivity(i);
    }






    public static void main_upload(View view){

    }
    public void main_download(View view){

    }



}
