import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'يناير', value: 4000 },
  { name: 'فبراير', value: 3000 },
  { name: 'مارس', value: 5000 },
  { name: 'أبريل', value: 4500 },
  { name: 'مايو', value: 6000 },
  { name: 'يونيو', value: 5500 },
  { name: 'يوليو', value: 7000 },
];

const RevenueChart = () => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border animate-fade-in" style={{ animationDelay: '200ms' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">الإيرادات الشهرية</h3>
          <p className="text-sm text-muted-foreground">نظرة عامة على الأداء المالي</p>
        </div>
        <select className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm border-0 focus:ring-2 focus:ring-primary">
          <option>هذا العام</option>
          <option>العام الماضي</option>
        </select>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '12px',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 600 }}
              itemStyle={{ color: 'hsl(var(--primary))' }}
              formatter={(value: number) => [`${value.toLocaleString()} ر.س`, 'الإيرادات']}
            />
            <Bar 
              dataKey="value" 
              fill="hsl(var(--primary))" 
              radius={[8, 8, 0, 0]}
              maxBarSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
