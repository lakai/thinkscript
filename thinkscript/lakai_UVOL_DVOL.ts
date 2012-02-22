#UVOL_DVOL HISTOGRAM
#By lakai http://www.tradeitdontdateit.com

declare lower;
plot data = close("$uvol")/close("$dvol");
plot data2 = close("$dvol")/close("$uvol");
plot ZeroLine = 1;
plot Diff = data;
plot Diff2 = data2;

diff.AssignValueColor(if Diff >= 1 then Color.BLUE else Color.downtick);
Diff.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
diff2.AssignValueColor(if Diff2 >= 1 then Color.downtick else Color.BLUE);
Diff2.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
ZeroLine.SetDefaultColor(color.WHITE);
data.SetDefaultColor(color.BLUE);
data2.SetDefaultColor(color.RED);
