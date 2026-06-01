function fellAsleep() {
    return Math.random() < 0.01;
}

function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} mowed the yard.`);
            resolve();
        }, 2000);
    });
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if (!fellAsleep()) {
                console.log(`${name} finished using the weed eater.`);
                resolve();
            } else {
                reject(`${name} fell asleep after using the weed eater.`);
            }
        }, 1500);
    });
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if (!fellAsleep()) {
                console.log(`${name} finished trimming the hedges.`);
                resolve();
            } else {
                reject(`${name} fell asleep after trimming the hedges.`);
            }
        }, 1000);
    });
}

function collectWood(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if (!fellAsleep()) {
                console.log(`${name} finished collecting the wood.`);
                resolve();
            } else {
                reject(`${name} fell asleep after collecting the wood.`);
            }
        }, 2500);
    });
}

function waterGarden(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if (!fellAsleep()) {
                console.log(`${name} finished watering the garden.`);
                resolve();
            } else {
                reject(`${name} fell asleep after watering the garden.`);
            }
        }, 500);
    });
}

function doSummerChores(name) {
    mowYard(name)
        .then(() => weedEat(name))
        .then(() => trimHedges(name))
        .then(() => collectWood(name))
        .then(() => waterGarden(name))
        .then(() => {
            console.log(`${name} finished all their chores!`);
        })
        .catch((error) => {
            console.log(error);
        });
}

doSummerChores("Reghan");