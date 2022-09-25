module.exports.get = data;

let arr = [];


const project1 = {
    id: "1",
    name: "skproject"
};

const project2 = {
    id: "2",
    name: "pkproject"
};

const project3 = {
    id: "3",
    name: "rdproject"
};

arr.push(project1,project2, project3);




function data() {

    const Jsondata = JSON.stringify(arr);
    
    return Jsondata;
}

