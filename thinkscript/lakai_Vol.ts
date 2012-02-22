#Colored Volume
#lakai http://www.tradeitdontdateit.com

declare real_size;
declare on_volume;

plot Vol = volume;

Vol.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
Vol.SetLineWeight(5);
Vol.DefineColor("Up",(Color.UPTICK));
Vol.DefineColor("Down", (Color.DOWNTICK));
Vol.AssignValueColor(if close < open then Vol.color("Down") else Vol.color("Up"));
