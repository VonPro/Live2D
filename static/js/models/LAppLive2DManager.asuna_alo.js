function LAppLive2DManager(){
	this.models = [];
	this.count = -1;
	this.reloadFlg = false;

	Live2D.init();
	Live2DFramework.setPlatformManager(new PlatformManager);
}
LAppLive2DManager.prototype.createModel = function(){
	var model = new LAppModel();
	this.models.push(model);
	return model;
}
LAppLive2DManager.prototype.changeModel = function(gl){
	if(this.reloadFlg){
		this.reloadFlg = false;

		var no = parseInt(this.count % 34);
		var thisRef = this;

		switch(no){
			case 0:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_01);
				break;
			case 1:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_02);
				break;
			case 2:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_03);
				break;
			case 3:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_04);
				break;
			case 4:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_05);
				break;
			case 5:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_06);
				break;
			case 6:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_07);
				break;
			case 7:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_08);
				break;
			case 8:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_09);
				break;
			/*case 9:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_10);
				break;*/
			/*case 10:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_11);
				break;*/
			case 11:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_12);
				break;
			case 12:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_13);
				break;
			case 13:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_14);
				break;
			case 14:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_15);
				break;
			case 15:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_16);
				break;
			case 16:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_17);
				break;
			case 17:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_18);
				break;
			case 18:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_19);
				break;
			case 19:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_20);
				break;
			case 20:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_21);
				break;
			case 21:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_22);
				break;
			case 22:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_23);
				break;
			case 23:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_24);
				break;
			case 24:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_25);
				break;
			case 25:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_26);
				break;
			case 26:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_27);
				break;
			case 27:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_28);
				break;
			case 28:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_29);
				break;
			case 29:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_30);
				break;
			/*case 30:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_31);
				break;*/
			/*case 31:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_32);
				break;*/
			case 32:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_33);
				break;
			case 33:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_34);
				break;
			case 34:
				this.releaseModel(1,gl);
				this.releaseModel(0,gl);
				this.createModel();
				this.models[0].load(gl,LAppDefine.ALO_ASUNA_35);
				break;
		}
	}
};
LAppLive2DManager.prototype.getModel = function(no){
	if(no >= this.models.length) return null;

	return this.models[no];
};
LAppLive2DManager.prototype.releaseModel = function(no,gl){
	if(this.models.length <= no) return;

	this.models[no].release(gl);
	delete this.models[no];
	this.models.splice(no,1);
};
LAppLive2DManager.prototype.numModels = function(){
	return this.models.length;
};
LAppLive2DManager.prototype.setDrag = function(x,y){
	for(var i = 0;i < this.models.length;i++){
		this.models[i].setDrag(x,y);
	}
}
LAppLive2DManager.prototype.maxScaleEvent = function(){
	if(LAppDefine.DEBUG_LOG) console.log("Max scale event.");

	for(var i = 0;i < this.models.length;i++){
		this.models[i].startRandomMotion(LAppDefine.MOTION_GROUP_PINCH_IN,LAppDefine.PRIORITY_NORMAL);
	}
}
LAppLive2DManager.prototype.minScaleEvent = function(){
	if(LAppDefine.DEBUG_LOG) console.log("Min scale event.");

	for(var i = 0;i < this.models.length;i++){
		this.models[i].startRandomMotion(LAppDefine.MOTION_GROUP_PINCH_OUT,LAppDefine.PRIORITY_NORMAL);
	}
}
LAppLive2DManager.prototype.tapEvent = function(x,y){
	if(LAppDefine.DEBUG_LOG) console.log("tapEvent view x:" + x + " y:" + y);

	for(var i = 0;i < this.models.length;i++){
		if(this.models[i].hitTest(LAppDefine.HIT_AREA_HEAD,x,y)){
			if(LAppDefine.DEBUG_LOG) console.log("Tap face.");

			this.models[i].setRandomExpression();
		}
		else{
			var hitAreas = this.models[i].modelSetting.getHitAreaNum();
			for(var h = 0;h < hitAreas;h++){
				if(this.models[i].hitTest(this.models[i].modelSetting.getHitAreaName(h),x,y)){
					var motionGroup = "tap_" + this.models[i].modelSetting.getHitAreaName(h);
					var exist = this.models[i].modelSetting.getMotionNum(motionGroup);

					if(LAppDefine.DEBUG_LOG) console.log("Tap body." + " models[" + i + "]" + " motionGroup=" + motionGroup);

					if(exist != 0){
						this.models[i].startRandomMotion(motionGroup,LAppDefine.PRIORITY_NORMAL);
						break;
					}
				}
			}
		}
	}
	return true;
};