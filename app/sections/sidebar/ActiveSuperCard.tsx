import Card from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function ActiveSuperCard() {
  return (
    <Card className="mx-6 my-10 shrink-0 gap-3 space-y-3 bg-white p-3">
      <div className="flex items-center justify-between gap-1.5">
        <img
          alt="Super Badge"
          className="size-7 rounded-[6px] stroke-0"
          src="/assets/badges/super.svg"
        />
        <div className="flex w-full basis-full flex-col justify-between">
          <h3 className="text-sm font-medium">Active Super</h3>
          <p className="text-[11px]">Unlock All feature on Gilsanium</p>
        </div>
      </div>

      <Button className="w-full bg-primary-contrast text-center text-sm font-medium text-white inset-shadow-btn">
        Upgrade
      </Button>
    </Card>
  );
}
