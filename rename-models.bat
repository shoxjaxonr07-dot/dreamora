@echo off
cd /d "%~dp0public\models"
echo Renaming model files to short names...
if exist "Sports Car by Quaternius*.glb" if not exist "car.glb" ren "Sports Car by Quaternius*.glb" "car.glb"
if exist "SUV by Quaternius*.glb" if not exist "suv.glb" ren "SUV by Quaternius*.glb" "suv.glb"
if exist "Police Car by Quaternius*.glb" if not exist "policecar.glb" ren "Police Car by Quaternius*.glb" "policecar.glb"
if exist "Truck by Zsky*.glb" if not exist "truck.glb" ren "Truck by Zsky*.glb" "truck.glb"
if exist "Bus by Poly by Google*.glb" if not exist "bus.glb" ren "Bus by Poly by Google*.glb" "bus.glb"
if exist "Go kart by Poly by Google*.glb" if not exist "gokart.glb" ren "Go kart by Poly by Google*.glb" "gokart.glb"
if exist "Motorcycle by Poly by Google*.glb" if not exist "motorcycle.glb" ren "Motorcycle by Poly by Google*.glb" "motorcycle.glb"
if exist "Bike by Zsky*.glb" if not exist "bike.glb" ren "Bike by Zsky*.glb" "bike.glb"
if exist "Bicycle by Poly by Google*.glb" if not exist "bicycle.glb" ren "Bicycle by Poly by Google*.glb" "bicycle.glb"
if exist "Scooter by jeremy*.glb" if not exist "scooter.glb" ren "Scooter by jeremy*.glb" "scooter.glb"
if exist "Skateboard by Poly by Google*.glb" if not exist "skateboard.glb" ren "Skateboard by Poly by Google*.glb" "skateboard.glb"
if exist "VR-Mobil by Vladimir Ilic*.glb" if not exist "vrmobil.glb" ren "VR-Mobil by Vladimir Ilic*.glb" "vrmobil.glb"
if exist "CAR Model by Ignition Labs*.glb" if not exist "car2.glb" ren "CAR Model by Ignition Labs*.glb" "car2.glb"
if exist "Boat by Quaternius*.glb" if not exist "boat.glb" ren "Boat by Quaternius*.glb" "boat.glb"
if exist "Ship by Quaternius*.glb" if not exist "ship.glb" ren "Ship by Quaternius*.glb" "ship.glb"
if exist "Airplane by Poly by Google*.glb" if not exist "airplane.glb" ren "Airplane by Poly by Google*.glb" "airplane.glb"
if exist "Spaceship by Liz Reddington*.glb" if not exist "spaceship.glb" ren "Spaceship by Liz Reddington*.glb" "spaceship.glb"
if exist "Man by Quaternius*.glb" if not exist "man.glb" ren "Man by Quaternius*.glb" "man.glb"
if exist "Hoodie Character by Quaternius*.glb" if not exist "hoodie.glb" ren "Hoodie Character by Quaternius*.glb" "hoodie.glb"
if exist "Woman in Dress by Quaternius*.glb" if not exist "woman-dress.glb" ren "Woman in Dress by Quaternius*.glb" "woman-dress.glb"
if exist "Woman in Tank Top by Quaternius*.glb" if not exist "woman-tank.glb" ren "Woman in Tank Top by Quaternius*.glb" "woman-tank.glb"
if exist "Fitness Character by iPoly3D*.glb" if not exist "fitness.glb" ren "Fitness Character by iPoly3D*.glb" "fitness.glb"
echo.
echo Files now in the models folder:
dir /b *.glb
dir /b > "%~dp0models-list.txt"
echo.
echo Done. A list was saved as models-list.txt next to this file.
pause
