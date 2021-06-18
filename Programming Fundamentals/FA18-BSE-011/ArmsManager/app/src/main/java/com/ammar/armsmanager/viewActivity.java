package com.ammar.armsmanager;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.content.Intent;
import android.widget.ListAdapter;
import android.widget.ListView;

public class viewActivity extends AppCompatActivity {

    valuesCommander values;
    ListView listview;
    String mode;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.view_activity);
        Bundle mode_identifier = getIntent().getExtras();
        mode = mode_identifier.getString("mode");
        listview =  findViewById(R.id.listview);
        values= new valuesCommander();

        values.generate_dud_records();

        String[] list = values.search("",mode);

        ListAdapter adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_activated_1, list);

        listview.setAdapter(adapter);
    }

    public  void view_searchButton_action(View view){
        EditText view_searchField = findViewById(R.id.view_searchField);
        try{
            String query = view_searchField.getText().toString();
            String[] list = values.search(query,mode);
            ListAdapter adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_activated_1, list);
            listview.setAdapter(adapter);
        }
        catch(Exception e){
            String[] a = {e.getMessage()};
            ListAdapter adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_activated_1, a);
            listview.setAdapter(adapter);}
        }

    }

