var vm= new Vue({
		el:'.mair',
		data:{
			item:[
				{
					wen:'(1)您精力充沛吗？',
					Reverse:false,
					name:'energy',
					chek:'1',
					Peaceful:true,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					        {
					      	  problem : '没有',
					      	  score : '1',
					      	 
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(2)您容易疲乏吗？*',
					Reverse:true,
					name:'pilao',
					chek:'1',
					Peaceful:true,
					qideficiency:true,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(3)您说话声音低弱无力吗?*',
					Reverse:true,
					name:'wuli',
					chek:'1',
					Peaceful:true,
					qideficiency:true,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(4)您感到闷闷不乐、情绪低沉吗?*',
					Reverse:true,
					name:'dichen',
					chek:'1',
					Peaceful:true,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:true,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(5)您比一般人耐受不了寒冷(冬天的寒冷，夏天的冷空调、电扇等)吗？*',
					Reverse:true,
					name:'paleng',
					chek:'1',
					Peaceful:true,
					qideficiency:false,
					yangdeficiency:true,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(6)您能适应外界自然和社会环境的变化吗？',
					Reverse:false,
					name:'bushiying',
					chek:'1',
					Peaceful:true,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					        {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(7)您容易失眠吗？*',
					Reverse:true,
					name:'shimian',
					chek:'1',
					Peaceful:true,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(8)您容易忘事（健忘）吗*',
					Reverse:true,
					name:'jianwang',
					chek:'1',
					Peaceful:true,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:true,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(9)您容易气短(呼吸短促，接不上气)吗？',
					name:'qiduan',
					chek:'1',
					Peaceful:false,
					qideficiency:true,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(10)您容易心慌吗？',
					name:'xinhuan',
					chek:'1',
					Peaceful:false,
					qideficiency:true,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(11)您容易头晕或站起时晕眩吗?',
					name:'touyun',
					chek:'1',
					Peaceful:false,
					qideficiency:true,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(12)您比别人容易患感冒吗?',
					name:'yigan',
					chek:'1',
					Peaceful:false,
					qideficiency:true,
					yangdeficiency:true,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(13)您喜欢安静、懒得说话吗?',
					name:'xijing',
					chek:'1',
					Peaceful:false,
					qideficiency:true,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(14)您活动量稍大就容易出虚汗吗?',
					name:'yihan',
					chek:'1',
					Peaceful:false,
					qideficiency:true,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(15)您手脚发凉吗?',
					name:'faliang',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:true,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(16))您胃脘部、背部或腰膝部怕冷吗?',
					name:'weihan',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:true,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(17)您感到怕冷、衣服比别人穿得多吗?',
					name:'duoyi',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:true,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(18)您吃(喝)凉的东西会感到不舒服或者怕吃(喝)凉的东西吗?',
					name:'jilengshi',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:true,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(19)您受凉或吃(喝)凉的东西后，容易腹泻(拉肚子)吗?',
					name:'fuxie',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:true,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(20)您感到手脚心发热吗?',
					name:'fare',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:true,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(21)您感觉身体、脸上发热吗？',
					name:'tire',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:true,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(22)您皮肤或口唇干吗?',
					name:'ganzao',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:true,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(23)您口唇的颜色比一般人红吗?',
					name:'chunhong',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:true,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(24)您容易便秘或大便干燥吗?',
					name:'bianmi',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:true,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(25)您面部两颧潮红或偏红吗?',
					name:'mianhong',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:true,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(26)您感到眼睛干涩吗?',
					name:'yanse',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:true,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(27)您感到口干咽燥、总想喝水吗?',
					name:'kougan',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:true,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(28)您感到胸闷或腹部胀满吗?',
					name:'xiongmen',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:true,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(29)您感到身体沉重不轻松或不爽快吗?',
					name:'chenzhong',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:true,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(30)您腹部肥满松软吗?',
					name:'yaocu',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:true,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(31)您有额部油脂分泌多的现象吗?',
					name:'youtou',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:true,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(32)您上眼睑比别人肿（上眼睑有轻微隆起的现象）吗?',
					name:'yanlianzhong',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:true,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(33)您嘴里有黏黏的感觉吗?',
					name:'nian',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:true,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(34)您平时痰多，特别是咽喉部总感到有痰堵着吗?',
					name:'tanduo',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:true,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(35)您舌苔厚腻或有舌苔厚厚的感觉吗?',
					name:'shetai',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:true,
					dampheat:false,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(36)您面部或鼻部有油腻感或者油亮发光吗?',
					name:'mianyou',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:true,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(37)您易生痤疮或疮疖吗?',
					name:'cuochuang',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:true,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(38)您感到口苦或嘴里有异味吗?',
					name:'kouku',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:true,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(39)您大便黏滞不爽、有解不尽的感觉吗?',
					name:'biannian',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:true,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(40)您小便时尿道有发热感、尿色浓(深)吗？',
					name:'niaose',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:true,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(41)您带下色黄(白带颜色发黄)吗?（限女性回答）or 您的阴囊部位潮湿吗? （限男性回答）',
					name:'sex',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:true,
					stasis:false,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(42)您的皮肤在不知不觉中会出现青紫瘀斑(皮下出血)吗?',
					name:'yuxue',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:true,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(43)您两颧部有细微红丝吗?',
					name:'quanyuxue',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:true,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(44)您身体上有哪里疼痛吗？',
					name:'shentiteng',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:true,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(45)您面色晦黯、或容易出现褐斑吗?',
					name:'mianan',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:true,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(46)您容易有黑眼圈吗?',
					name:'heiyanquan',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:true,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(47)您口唇颜色偏黯吗?',
					name:'chunsean',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:true,
					depression:false,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(47)您容易精神紧张、焦虑不安吗?',
					name:'jiaolv',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:true,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(48)您多愁善感、感情脆弱吗?',
					name:'shanggan',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:true,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(49)您容易感到害怕或受到惊吓吗?',
					name:'haipa',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:true,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(50)您胁肋部或乳房胀痛吗?',
					name:'zhongzhang',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:true,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(51)您无缘无故叹气吗?',
					name:'tanqi',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:true,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(52)您咽喉部有异物感，且吐之不出、咽之不下吗？',
					name:'yiwu',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:true,
					special:false,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(52)您没有感冒时也会打喷嚏吗？',
					name:'penti',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:true,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(53)您没有感冒时也会鼻塞、流鼻涕吗?',
					name:'biti',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:true,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(54)您有因季节变化、温度变化或异味等原因而咳喘的现象吗？',
					name:'kechuan',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:true,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(55)您容易过敏(对药物、食物、气味、花粉或在季节交替、气候变化时)吗?',
					name:'guomin',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:true,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(56)您的皮肤容易起荨麻疹(风团、风疹块、风疙瘩)吗?',
					name:'xunmazhen',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:true,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(57)您的皮肤因过敏出现过紫癜(紫红色瘀点、瘀斑)吗?',
					name:'zidian',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:true,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				},
				{
					wen:'(58)您的皮肤一抓就红，并出现抓痕吗?',
					name:'zhuahen',
					chek:'1',
					Peaceful:false,
					qideficiency:false,
					yangdeficiency:false,
					yindeficiency:false,
					Phlegm:false,
					dampheat:false,
					stasis:false,
					depression:false,
					special:true,
					content : [
					         {
					      	  problem : '没有',
					      	  score : '1'
					        },
					        {
					      	  problem : '很少',
					      	  score : '2'
					        },
					         {
					      	  problem : '有时',
					      	  score : '3'
					        },
					        {
					      	  problem : '经常',
					      	  score : '4'
					        },
					        {
					      	  problem : '总是',
					      	  score : '5'
					        }
					      ]
				}
				
			],
			Peaceful:'',
			qideficiency:'',
			yangdeficiency:'',
			yindeficiency:'',	
			Phlegm:'',
			dampheat:'',	
			stasis:'',
			depression:'',	
			special:'',
			items:[{k1:5,k2:4,k3:3,k4:2,k5:1}],
			add:[],
			physical_item:''
		},
		computed:{
			Peaceful_data () {//平和质
				this.Peaceful=0
				this.item.filter(item => item.Peaceful==true).forEach(
					(item) => {
						if(item.Reverse==true){
							this.Peaceful+=parseInt(this.items[0]['k'+item.chek])
						}else{
							this.Peaceful+=parseInt(item.chek)
						}
					}
				)
				
				return [(this.Peaceful-this.item.filter(item => item.Peaceful==true).length)/(this.item.filter(item => item.Peaceful==true).length*4)]*100
			},
			qideficiency_data () {//气虚质
				this.qideficiency=0
				this.item.filter(item => item.qideficiency==true).forEach(item => this.qideficiency+=parseInt(item.chek))
				return [(this.qideficiency-this.item.filter(item => item.qideficiency==true).length)/(this.item.filter(item => item.qideficiency==true).length*4)]*100
			},
			yangdeficiency_data () {//阳虚质
				this.yangdeficiency=0
				this.item.filter(item => item.yangdeficiency==true).forEach(item => this.yangdeficiency+=parseInt(item.chek))
				return [(this.yangdeficiency-this.item.filter(item => item.yangdeficiency==true).length)/(this.item.filter(item => item.yangdeficiency==true).length*4)]*100
			},
			yindeficiency_data () {//阴虚质
				this.yindeficiency=0
				this.item.filter(item => item.yindeficiency==true).forEach(item => this.yindeficiency+=parseInt(item.chek))
				return [(this.yindeficiency-this.item.filter(item => item.yindeficiency==true).length)/(this.item.filter(item => item.yindeficiency==true).length*4)]*100
			},
			Phlegm_data () {//痰湿质
				this.Phlegm=0
				this.item.filter(item => item.Phlegm==true).forEach(item => this.Phlegm+=parseInt(item.chek))
				return [(this.Phlegm-this.item.filter(item => item.Phlegm==true).length)/(this.item.filter(item => item.Phlegm==true).length*4)]*100
			},
			dampheat_data () {//湿热质
				this.dampheat=0
				this.item.filter(item => item.dampheat==true).forEach(item => this.dampheat+=parseInt(item.chek))
				return [(this.dampheat-this.item.filter(item => item.dampheat==true).length)/(this.item.filter(item => item.dampheat==true).length*4)]*100
			},
			stasis_data () {//血瘀质
				this.stasis=0
				this.item.filter(item => item.stasis==true).forEach(item => this.stasis+=parseInt(item.chek))
				return [(this.stasis-this.item.filter(item => item.stasis==true).length)/(this.item.filter(item => item.stasis==true).length*4)]*100
			},
			depression_data () {//气郁质
				this.depression=0
				this.item.filter(item => item.depression==true).forEach(item => this.depression+=parseInt(item.chek))
				return [(this.depression-this.item.filter(item => item.depression==true).length)/(this.item.filter(item => item.depression==true).length*4)]*100
			},
			special_data () {//特禀质
				this.special=0
				this.item.filter(item => item.special==true).forEach(item => this.special+=parseInt(item.chek))
				return [(this.special-this.item.filter(item => item.special==true).length)/(this.item.filter(item => item.special==true).length*4)]*100
			},
			physical(){//体质
				this.add=[],
				this.add.push(
					{zhi:this.qideficiency_data,name:'气虚质'},
					{zhi:this.yangdeficiency_data,name:'阳虚质'},
					{zhi:this.yindeficiency_data,name:'阴虚质'},
					{zhi:this.Phlegm_data,name:'痰湿质'},
					{zhi:this.dampheat_data,name:'湿热质'},
					{zhi:this.stasis_data,name:'血瘀质'},
					{zhi:this.depression_data,name:'气郁质'},
					{zhi:this.special_data,name:'特禀质'},
				)
				this.add.sort( (a,b) => b.zhi-a.zhi)
				console.log(this.add.filter(item => item.zhi>40))
				if(this.add.filter(item => item.zhi>40).length>0){
					
					if(this.add.filter(item => item.zhi>30&&item.zhi<40).length>0){
							this.physical_item='您的体质是<span style="color:#ff6600">'
							this.add.filter(item => item.zhi>40).forEach((item)=> this.physical_item+=item.name+',')
							this.physical_item+='</span>倾向是<span style="color:#ff6600">'
							this.add.filter(item => item.zhi>30&&item.zhi<40).forEach((item)=> this.physical_item+=item.name+',')
							this.physical_item+='</span>'
							
						}else{
							this.physical_item='您的体质是<span style="color:#ff6600">'
							this.add.filter(item => item.zhi>40).forEach((item)=> this.physical_item+=item.name+',')
							this.physical_item+='</span>'
						}
					
				}else{
					if(this.Peaceful_data>60){
						if(this.add.filter(item => item.zhi>30).length>0){
							this.physical_item='您的体质基本是<span style="color:#99CC33">平和质</span>,倾向是<span style="color:#ff6600">'
							this.add.filter(item => item.zhi>30).forEach((item)=> this.physical_item+=item.name+',')
							this.physical_item+='</span>'
						}else{
							this.physical_item='您的体质是<span style="color:#99CC33">平和质<span>'
							this.add.filter(item => item.zhi>30).forEach((item)=> this.physical_item+=item.name+',')
						}
					}else{
						if(this.add.filter(item => item.zhi>30).length>0){
							this.physical_item='您的体质倾向是<span style="color:#ff6600">'
							this.add.filter(item => item.zhi>30).forEach((item)=> this.physical_item+=item.name+',')
							this.physical_item+='</span>'
						}else{
							this.physical_item='您的测试结果不满足任何体质，请在专业人士的指导下重新测试'
							this.add.filter(item => item.zhi>30).forEach((item)=> this.physical_item+=item.name+',')
						}
					}
					
				}
				
				
				return	this.physical_item
			}
		},
		methods:{
			sbu:function(){
				
				localStorage.setItem("last", this.physical);
				window.location.href = "marin.html";
			}
		}
		
	})