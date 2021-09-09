
const battle=require("./battles.json")
const func=require("./functions")




var most_active=[]
var name=[]
for(obj of battle){
    name.push(obj.name)
}

var most_name=func.data.mode(name)
if(most_name[1]==1) most_active.push(["Each name is unique"])
else most_active.push(most_name)

var region=[]
for(obj of battle){
    region.push(obj.region)
}
var most_region=func.data.mode(region)
most_active.push(most_region)

var attack=[]
for(obj of battle){
    attack.push(obj.attacker_king)
}
var most_attack=func.data.mode(attack)
most_active.push(most_attack)

var defend=[]
for(obj of battle){
    defend.push(obj.defender_king)
}
var most_defend=func.data.mode(defend)
most_active.push(most_defend)



var battle_type=[]
for(obj of battle){
    battle_type.push(obj.battle_type)
}
battle_type=func.data.mode(battle_type)
var outcome=[]
for(obj of battle){
    outcome.push(obj.attacker_outcome)
}



var attacker_outcome=[]
attacker_outcome=func.data.count(outcome)

var size=[]
for(obj of battle){
    size.push(obj.defender_size)
}
var size = size.filter(function (e) {return e != null;});
var defender_size=[]
defender_size.push(func.data.arithmetic(size))


output=[]
output.push(most_active,attacker_outcome,battle_type,defender_size)
console.log( output) ;
//var ob={'most_act':output[0],'attacker_outcome':output[1],'battle_type':output[2],'defender_size':output[3]}


