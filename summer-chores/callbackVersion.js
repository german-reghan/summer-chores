function fellAsleep() {
    return Math.random() < 0.95;
}

function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        callback();
    }, 2000);
}

function weedEat(name, callback) {
    setTimeout(() => {
        if (!fellAsleep()) {
            console.log(`${name} finished using the weed eater.`);
            callback();
        } else {
            console.log(`${name} fell asleep after using the weed eater.`);
        }
    }, 1500);
}

function trimHedges(name, callback) {
    setTimeout(() => {
        if (!fellAsleep()) {
            console.log(`${name} finished trimming the hedges.`);
            callback();
        } else {
            console.log(`${name} fell asleep after trimming the hedges.`);
        }
    }, 1000);
}

function collectWood(name, callback) {
    setTimeout(() => {
        if (!fellAsleep()) {
            console.log(`${name} finished collecting the wood.`);
            callback();
        } else {
            console.log(`${name} fell asleep after collecting the wood.`);
        }
    }, 2500);
}

function waterGarden(name, callback) {
    setTimeout(() => {
        if (!fellAsleep()) {
            console.log(`${name} finished watering the garden.`);
            callback();
        } else {
            console.log(`${name} fell asleep after watering the garden.`);
        }
    }, 500);
}

function doSummerChores(name) {
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        console.log(`${name} finished all their chores!`);
                    });
                });
            });
        });
    });
}

doSummerChores("Reghan")