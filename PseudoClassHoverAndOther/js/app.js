




first: for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            if(i === 1) break first;
            console.log(j);
        }
    }

