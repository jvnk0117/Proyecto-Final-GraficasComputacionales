class Asteroid
{
    constructor(x,y,z,asteroidObj, shipgroup)
    {
        this.x = x
        this.y = y
        this.z = z
        this.asteroidObj = asteroidObj.clone()
        shipgroup.add(this.asteroidObj)

        const max = 30;
        const min = -30;
        this.asteroidObj.position.x = (Math.random()) * (max - min) + min;
        this.asteroidObj.position.y = (Math.random()) * (max - min) + min;
        
        
        
    }

     update()
    {
        this.asteroidObj.position.z -= 2 
    }       

    despawn()
    {
        this.asteroidObj.remove()
        console.log("despawning")
    }

    getPosition()
    {
        let position = this.asteroidObj.position.z
        return position
    }
    
}

export{Asteroid}