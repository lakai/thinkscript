#stochastics Slow Cloud
#By lakai http://www.tradeitdontdateit.com

declare lower;
declare all_for_one;

#input over_bought_top = 40;
input over_bought = 80;
input over_sold = 20;
#input over_sold_bottom = 60;
input KPeriod = 14;
input DPeriod = 3;
input priceH = high;
input priceL = low;
input priceC = close;
input smoothingType = 1;

plot SlowK = reference StochasticFull(over_bought, over_sold, KPeriod, DPeriod, priceH, priceL, priceC, 3, smoothingType).FullK;
SlowK.SetDefaultColor(GetColor(5));

plot SlowD = reference StochasticFull(over_bought, over_sold, KPeriod, DPeriod, priceH, priceL, priceC, 3, smoothingType).FullD;
SlowD.SetDefaultColor(Color.White);

AddCloud(SlowK, SlowD);

plot OverBought = over_bought;
OverBought.SetDefaultColor(Color.Blue);
plot OverSold = over_sold;
OverSold.SetDefaultColor(Color.Blue);

#plot OverBought_top = over_bought_top;
#plot OverSold_bottom = over_sold_bottom;

#AddCloud(Overbought_top,OverSold_bottom);
#AddCloud(OverSold,OverBought);