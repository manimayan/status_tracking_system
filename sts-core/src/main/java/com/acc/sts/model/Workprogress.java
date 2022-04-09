package com.acc.sts.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class Workprogress {
	
	private int inprogress;
	private int onhold;
	private int closed;
	private int approved;




public Workprogress( int inprogress,int onhold,int closed,int approved){
	this.inprogress=inprogress;
	this.onhold=onhold;
	this.closed=closed;
	this.approved=approved;


}

}