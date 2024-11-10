package com.inspur.gs.apporder.df.organization.organization.back.teacher.validations;
import com.inspur.edp.cef.api.message.*;
import com.inspur.edp.bef.api.action.validation.*;
import com.inspur.edp.bef.spi.action.validation.*;
import com.inspur.edp.cef.entity.changeset.*;
import com.inspur.edp.bef.spi.action.validation.AbstractValidation;
import com.inspur.edp.bef.api.action.validation.IValidationContext;
import com.inspur.edp.cef.entity.entity.IEntityData;

public class TeacherpasswordValidation extends AbstractValidation {
	public TeacherpasswordValidation(IValidationContext context, IChangeDetail change) {
		super(context,change);
	}
	@Override
	public  void execute() {
	}
	private IEntityData getData() {
		return (IEntityData)super.getContext().getCurrentData();
	}
}