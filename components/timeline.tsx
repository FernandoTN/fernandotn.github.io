interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  company: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative flex items-start space-x-6 md:space-x-8">
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary-foreground rounded-full" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pb-8">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                  {event.year}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{event.company}</p>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}