import type { NextPage } from 'next';
import ProfileHeader from '../components/profileHeader';
import DocuTop from '../components/docu_top_section';
import DocuTab from '../components/docu_tab_panel';
const docuSign: NextPage = () => {
  return (
    <div>
      <ProfileHeader />
      <DocuTop />
      <DocuTab />
    </div>
  );
};

export default docuSign;
